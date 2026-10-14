import z from "zod";

export const messageSchema = z.object({
    name: z.string().min(1, 'El nombre es requerido').max(100, 'El nombre debe tener máximo 100 caracteres'),
    content: z.string().min(1, 'El contenido es requerido').max(500, 'El contenido debe tener máximo 500 caracteres'),
});

export type MessageFormData = z.infer<typeof messageSchema>;