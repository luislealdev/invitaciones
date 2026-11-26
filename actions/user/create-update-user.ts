'use server';

import { randomBytes } from "crypto";
import bcryptjs from "bcryptjs";
import { after } from "next/server";
import { Role, type User } from "@prisma/client";

import prisma from "@/lib/prisma";
import { auth } from "@/auth.config";
import { userSchema } from "@/schema/user.schema";
import { createPasswordResetTokenAction } from "@/actions/auth/token.actions";
import { sendSetPasswordEmail, sendWelcomeEmail } from "@/utils/sendEmail";
import { sendWhatsApp } from "@/utils/send-whatsapp";
import { cleanPhoneNumber } from "@/utils/whatsapp";
import {
    buildSetPasswordWhatsAppMessage,
    buildWelcomeWhatsAppMessage,
} from "@/utils/whatsapp/templates";

export type SafeUser = Omit<User, 'password'>;

export interface CreateUpdateUserResponse {
    ok: boolean;
    message: string;
    data?: SafeUser;
}

/**
 * Crea o actualiza un usuario en la plataforma.
 * Permite registro con o sin contraseña, y sin sesión obligatoria (ej. invitados GUEST).
 * Si un invitado ya estaba registrado previamente por email o teléfono, se recupera el usuario existente.
 */
export async function createUpdateUser(data: unknown): Promise<CreateUpdateUserResponse> {
    const parsedData = userSchema.safeParse(data);

    if (!parsedData.success) {
        return {
            ok: false,
            message: parsedData.error.issues[0]?.message || "Información de usuario inválida",
        };
    }

    try {
        const session = await auth();
        const isAdmin = session?.user?.role === Role.ADMIN;

        // Sanitización de entradas
        const id = parsedData.data.id;
        const cleanName = parsedData.data.name.trim();
        const cleanEmail = parsedData.data.email?.trim().toLowerCase() || null;
        const cleanPhone = parsedData.data.phone ? cleanPhoneNumber(parsedData.data.phone) : null;
        const rawPassword = parsedData.data.password?.trim() || null;
        const gender = parsedData.data.gender || null;

        // Seguridad: solo administradores pueden asignar roles con privilegios
        let finalRole = parsedData.data.role || Role.GUEST;
        if (finalRole === Role.ADMIN && !isAdmin) {
            finalRole = Role.GUEST;
        }

        const result = await prisma.$transaction(async (tx) => {
            // Caso 1: Edición de usuario existente
            if (id) {
                const existingUser = await tx.user.findUnique({
                    where: { id },
                });

                if (!existingUser) {
                    throw new Error("El usuario especificado no existe");
                }

                // Validar colisión de email si cambió
                if (cleanEmail && cleanEmail !== existingUser.email) {
                    const emailConflict = await tx.user.findFirst({
                        where: { email: cleanEmail, id: { not: id } },
                    });
                    if (emailConflict) {
                        throw new Error("El correo electrónico ya está en uso por otra cuenta");
                    }
                }

                // Validar colisión de teléfono si cambió
                if (cleanPhone && cleanPhone !== existingUser.phone) {
                    const phoneConflict = await tx.user.findFirst({
                        where: { phone: cleanPhone, id: { not: id } },
                    });
                    if (phoneConflict) {
                        throw new Error("El número de teléfono ya está en uso por otra cuenta");
                    }
                }

                const hashedPassword = rawPassword ? await bcryptjs.hash(rawPassword, 10) : undefined;

                const updatedUser = await tx.user.update({
                    where: { id },
                    data: {
                        name: cleanName,
                        email: cleanEmail,
                        phone: cleanPhone,
                        gender,
                        ...(hashedPassword ? { password: hashedPassword } : {}),
                        ...(isAdmin ? { role: finalRole } : {}),
                    },
                });

                return {
                    user: updatedUser,
                    message: "Usuario actualizado correctamente",
                    isNew: false,
                    hasPassword: Boolean(updatedUser.password),
                };
            }

            // Caso 2: Creación de usuario (o reutilización si ya existe)
            if (cleanEmail || cleanPhone) {
                const existingUser = await tx.user.findFirst({
                    where: {
                        OR: [
                            ...(cleanEmail ? [{ email: cleanEmail }] : []),
                            ...(cleanPhone ? [{ phone: cleanPhone }] : []),
                        ],
                    },
                });

                // Si ya estaba registrado, reutilizarlo
                if (existingUser) {
                    return {
                        user: existingUser,
                        message: "Usuario existente recuperado",
                        isNew: false,
                        hasPassword: Boolean(existingUser.password),
                    };
                }
            }

            // Creación de nuevo usuario
            const hashedPassword = rawPassword ? await bcryptjs.hash(rawPassword, 10) : null;

            const newUser = await tx.user.create({
                data: {
                    name: cleanName,
                    email: cleanEmail,
                    phone: cleanPhone,
                    password: hashedPassword,
                    gender,
                    role: finalRole,
                },
            });

            return {
                user: newUser,
                message: "Usuario creado correctamente",
                isNew: true,
                hasPassword: Boolean(hashedPassword),
            };
        });

        const { user, isNew, hasPassword } = result;

        // Omitir contraseña en el objeto retornado
        const { password: _, ...safeUser } = user;

        // Envíos de notificaciones en segundo plano
        if (isNew) {
            after(async () => {
                try {
                    // Los invitados (GUEST) no necesitan contraseña para acceder al sistema
                    if (user.role === Role.GUEST) {
                        return;
                    }

                    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://invitta.link";

                    // Caso A: Usuario (USER o ADMIN) creado SIN contraseña -> enviar enlace para establecer contraseña
                    if (!hasPassword) {
                        const token = randomBytes(32).toString("hex");
                        const expirationDate = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 horas

                        await createPasswordResetTokenAction(user.id, token, expirationDate);
                        const setPasswordLink = `${appUrl}/auth/set-password?token=${token}`;

                        if (user.email) {
                            await sendSetPasswordEmail({
                                to: user.email,
                                token,
                                name: user.name,
                            });
                        }

                        if (user.phone) {
                            const whatsappMessage = buildSetPasswordWhatsAppMessage(user.name, setPasswordLink);
                            await sendWhatsApp(user.phone, whatsappMessage);
                        }
                    } else {
                        // Caso B: Usuario creado CON contraseña -> enviar mensaje de bienvenida
                        if (user.email) {
                            await sendWelcomeEmail({
                                to: user.email,
                                name: user.name,
                            });
                        }

                        if (user.phone) {
                            const welcomeWhatsapp = buildWelcomeWhatsAppMessage(user.name);
                            await sendWhatsApp(user.phone, welcomeWhatsapp);
                        }
                    }
                } catch (notificationError) {
                    console.error("[CREATE_USER_NOTIFICATION_ERROR]:", notificationError);
                }
            });
        }

        return {
            ok: true,
            data: safeUser,
            message: result.message,
        };

    } catch (error: unknown) {
        console.error("[CREATE_UPDATE_USER_ERROR]:", error);
        return {
            ok: false,
            message: error instanceof Error ? error.message : "Error al crear o actualizar el usuario",
        };
    }
}
