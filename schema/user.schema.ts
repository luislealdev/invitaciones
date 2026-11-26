import { z } from "zod";
import { Gender, Role } from "@prisma/client";

export const userSchema = z.object({
    id: z.number().int().optional(),
    name: z.string().min(1, 'El nombre es requerido').max(100, 'El nombre debe tener máximo 100 caracteres'),
    email: z.string().optional(),
    password: z.string().optional(),
    phone: z.string().optional(),
    gender: z.nativeEnum(Gender).optional(),
    role: z.nativeEnum(Role).default(Role.GUEST),
});

export type UserSchema = z.infer<typeof userSchema>;
