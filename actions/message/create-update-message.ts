'use server'

import { messageSchema } from "@/schema/message.schema";
import prisma from "@/lib/prisma";

export async function createUpdateMessage(data: unknown) {
    try {
        const messageParsed = messageSchema.safeParse(data);

        if (!messageParsed.success) {
            return {
                ok: false,
                message: messageParsed.error.issues[0]?.message || 'Información inválida'
            };
        }

        const newMessage = await prisma.message.create({
            data: {
                name: messageParsed.data.name,
                content: messageParsed.data.content,
            }
        });

        return {
            ok: true,
            message: 'Mensaje enviado exitosamente',
            data: newMessage
        };
    } catch (error) {
        console.error('Error al guardar mensaje:', error);
        return {
            ok: false,
            message: 'Error al enviar el mensaje'
        };
    }
}