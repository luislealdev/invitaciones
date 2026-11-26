import { z } from 'zod';
import { EventType, BlockType } from '@prisma/client';

export const templateSchema = z.object({
    id: z.number().int().optional(),
    name: z.string().min(1, 'El nombre es requerido').max(100, 'El nombre debe tener máximo 100 caracteres'),
    slug: z.string().min(1, 'El slug es requerido').max(100, 'El slug debe tener máximo 100 caracteres'),
    description: z.string().optional(),
    previewUrl: z.string().url('La URL de vista previa no es válida').optional(),
    eventType: z.nativeEnum(EventType),
    theme: z.string().optional(),
    isactive: z.boolean().optional(),
});

export const templateBlockSchema = z.object({
    id: z.number().int().optional(),
    templateId: z.number().int(),
    type: z.nativeEnum(BlockType),
    variant: z.string(),
    position: z.number().int(),
    content: z.string().optional(),
    style: z.string().optional(),
    isVisible: z.boolean(),
})

export type TemplateSchema = z.infer<typeof templateSchema>;
export type TemplateBlockSchema = z.infer<typeof templateBlockSchema>;