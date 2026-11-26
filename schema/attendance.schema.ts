import { z } from 'zod';
import { AttendanceStatus } from '@prisma/client';

export const attendanceSchema = z.object({
    id: z.number().int().optional(),
    guestId: z.number().int(),
    invitationId: z.number().int(),
    status: z.nativeEnum(AttendanceStatus),
    maxAttendees: z.number().int(),
    attendeeCount: z.number().int(),
    respondedAt: z.date().optional(),
    attendanceDeadLine: z.date().optional(),
});

export type AttendanceSchema = z.infer<typeof attendanceSchema>;