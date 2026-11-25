import { z } from "zod";
import { Gender, Role } from "@prisma/client";

export const userSchema = z.object({
    name: z.string().min(1, 'El nombre es requerido').max(100, 'El nombre debe tener máximo 100 caracteres'),
    email: z.string().email('El correo electrónico no es válido').max(100, 'El correo electrónico debe tener máximo 100 caracteres').optional(),
    password: z.string().optional(),
    phone: z.string().optional(),
    gender: z.nativeEnum(Gender).optional(),
    role: z.nativeEnum(Role),
});

export type UserSchema = z.infer<typeof userSchema>;