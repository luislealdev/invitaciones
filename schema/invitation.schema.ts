import { z } from 'zod';
import { EventType, InvitationStatus, BlockType } from '@prisma/client';

export const invitationSchema = z.object({
    id: z.number().int().optional(),
    userId: z.number().int(),
    invitationId: z.number().int(),
    name: z.string().min(1, 'El nombre es requerido').max(100, 'El nombre debe tener máximo 100 caracteres'),
    slug: z.string().min(1, 'El slug es requerido').max(100, 'El slug debe tener máximo 100 caracteres'),
    eventType: z.nativeEnum(EventType),
    eventDate: z.date().optional(),
    timeZone: z.string().optional(),
    soundtrack: z.string().optional(),
    theme: z.string().optional(),
    status: z.nativeEnum(InvitationStatus),
});

export const invitationBlockSchema = z.object({
    id: z.number().int().optional(),
    invitationId: z.number().int(),
    type: z.nativeEnum(BlockType),
    variant: z.string(),
    position: z.number().int(),
    content: z.string().optional(),
    style: z.string().optional(),
    isVisible: z.boolean(),
});

export type InvitationSchema = z.infer<typeof invitationSchema>;
export type InvitationBlockSchema = z.infer<typeof invitationBlockSchema>;