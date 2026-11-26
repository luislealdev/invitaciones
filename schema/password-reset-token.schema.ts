import { z } from "zod";

export const passwordResetTokenSchema = z.object({
    id: z.string().uuid().optional(),
    userId: z.number(),
    token: z.string().min(1, "Token requerido").max(255),
    createdAt: z.coerce.date().optional().nullable(),
    expirationDate: z.coerce.date(),
});