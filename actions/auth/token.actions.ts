"use server";

import prisma from "@/lib/prisma";
import { passwordResetTokenSchema } from "@/schema";

/**
 * Genera y almacena en base de datos un token de recuperación de contraseña.
 *
 * @param userId ID del usuario que solicita la recuperación
 * @param token Cadena aleatoria única
 * @param expirationDate Fecha y hora de expiración del token
 * @returns El token almacenado en base de datos
 */
export async function createPasswordResetTokenAction(userId: number, token: string, expirationDate: Date) {
    const validatedData = passwordResetTokenSchema.parse({
        userId,
        token,
        expirationDate,
    });

    const savedToken = await prisma.passwordResetToken.create({
        data: {
            userId: validatedData.userId,
            token: validatedData.token,
            expirationDate: validatedData.expirationDate,
        },
    });

    return savedToken;
}