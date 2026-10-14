'use server'

import { PaginationProps } from "@/interfaces/pagination.interface";
import prisma from "@/lib/prisma";

export async function getPaginatedMessages(params?: Partial<PaginationProps>) {
    try {
        const page = Math.max(1, params?.page || 1);
        const take = Math.min(100, Math.max(1, params?.take || 50));
        const skip = (page - 1) * take;

        const [data, total] = await Promise.all([
            prisma.message.findMany({
                take,
                skip,
                orderBy: { createdAt: 'desc' }
            }),
            prisma.message.count()
        ]);

        return {
            ok: true,
            message: 'Mensajes obtenidos exitosamente',
            data,
            total,
            totalPages: Math.ceil(total / take),
            currentPage: page
        };
    } catch (error) {
        console.error('Error al obtener los mensajes:', error);
        return {
            ok: false,
            message: 'Error al obtener los mensajes',
            data: [],
            total: 0,
            totalPages: 0,
            currentPage: 1
        };
    }
}

export async function deleteMessage(id: number) {
    try {
        await prisma.message.delete({
            where: { id }
        });
        return { ok: true, message: 'Mensaje eliminado' };
    } catch (error) {
        console.error('Error al eliminar mensaje:', error);
        return { ok: false, message: 'No se pudo eliminar el mensaje' };
    }
}