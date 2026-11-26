"use server";

import { after } from "next/server";
import prisma from "@/lib/prisma";
import { sendPasswordRecoveryEmail } from "@/utils/sendEmail";
import { randomBytes } from "crypto";
import { createPasswordResetTokenAction } from "./token.actions";
import { sendWhatsApp } from "@/utils/send-whatsapp";
import { buildPasswordRecoveryWhatsAppMessage } from "@/utils/whatsapp/templates";

/**
 * Genera el enlace seguro para restablecer la contraseña.
 *
 * @param token Token único de recuperación
 * @returns Enlace completo hacia la página de establecimiento de contraseña
 */
const getPasswordResetLink = (token: string) => {
    return `${process.env.NEXT_PUBLIC_APP_URL || "https://agendadirecta.mx"}/auth/set-password?token=${token}`;
};

/**
 * Solicita el restablecimiento de contraseña para un usuario.
 * Si el usuario existe, se genera un token de un solo uso y se envía un correo y mensaje de WhatsApp en segundo plano.
 *
 * @param email Correo del usuario que solicita la recuperación
 * @returns Objeto con estado `ok`
 */
export async function requestPasswordReset(email: string) {
    const user = await prisma.user.findFirst({
        where: { email },
        select: { id: true, email: true, phone: true, name: true },
    });
    if (!user || !user.id) {
        return { ok: true };
    }

    const token = randomBytes(32).toString("hex");
    const expirationDate = new Date(Date.now() + 60 * 60 * 1000);
    const resetLink = getPasswordResetLink(token);

    await createPasswordResetTokenAction(user.id, token, expirationDate);

    after(async () => {
        try {
            await sendPasswordRecoveryEmail({ to: user.email!, token });
        } catch (error) {
            console.error("[REQUEST_PASSWORD_RESET_EMAIL_ERROR]:", error);
        }

        if (user.phone) {
            try {
                const whatsappMessage = buildPasswordRecoveryWhatsAppMessage(user.name, resetLink);
                await sendWhatsApp(user.phone, whatsappMessage || undefined);
            } catch (error) {
                console.error("[REQUEST_PASSWORD_RESET_WHATSAPP_ERROR]:", error);
            }
        }
    });

    return { ok: true };
}

/**
 * Valida un token y establece una nueva contraseña para el usuario.
 *
 * @param token Token de recuperación enviado al usuario
 * @param newPassword Nueva contraseña en texto plano
 * @returns Objeto con el resultado de la operación
 */
export async function resetPassword(token: string, newPassword: string) {
    const resetToken = await prisma.passwordResetToken.findUnique({
        where: { token },
        select: { id: true, userId: true, expirationDate: true },
    });
    if (!resetToken || resetToken.expirationDate < new Date()) {
        return { ok: false, message: "Token inválido o expirado" };
    }

    const bcryptjs = await import("bcryptjs");
    const hashedPassword = await bcryptjs.hash(newPassword, 10);

    const [updatedUser] = await prisma.$transaction([
        prisma.user.update({
            where: { id: resetToken.userId },
            data: { password: hashedPassword },
            select: { id: true, email: true },
        }),
        prisma.passwordResetToken.delete({ where: { token } }),
    ]);

    return { ok: true, email: updatedUser.email };
}
