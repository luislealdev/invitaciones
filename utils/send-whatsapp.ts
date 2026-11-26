import { cleanPhoneNumber } from "./whatsapp";

export interface WhatsAppResponse {
    ok: boolean;
    status?: number;
    data?: any;
    message?: string;
    error?: any;
}

/**
 * Resuelve el nombre de la sesión de WhatsApp a usar para el envío.
 *
 * En este proyecto de invitaciones:
 * 1. Usa la sesión explícita si se proporciona.
 * 2. Hace fallback a la variable de entorno WAHA_SESSION o a 'default'.
 */
export const resolveWhatsAppSession = async (
    sessionName?: string
): Promise<string | undefined> => {
    if (sessionName?.trim()) {
        return sessionName.trim();
    }

    return process.env.WAHA_SESSION || 'default';
};

/**
 * Envía un mensaje de texto o archivo multimedia por WhatsApp usando la API de WAHA.
 *
 * @param phone - Número de teléfono del destinatario
 * @param message - Contenido del mensaje de texto o pie de foto para imagen
 * @param sessionName - Nombre de la sesión en WAHA (opcional, fallback a WAHA_SESSION o 'default')
 * @param imageUrl - URL pública de la imagen a enviar (opcional)
 */
export const sendWhatsApp = async (
    phone: string,
    message?: string,
    sessionName?: string,
    imageUrl?: string
): Promise<WhatsAppResponse> => {
    const formattedPhone = cleanPhoneNumber(phone);

    if (!formattedPhone) {
        return {
            ok: false,
            message: 'Número de teléfono inválido',
        };
    }

    const wahaBaseUrl = process.env.WAHA_BASE_URL;
    const apiKey = process.env.WAHA_API_KEY;
    const resolvedSession = await resolveWhatsAppSession(sessionName);

    if (!wahaBaseUrl || !apiKey || !resolvedSession) {
        console.warn('sendWhatsApp: faltan variables de entorno (WAHA_BASE_URL, WAHA_API_KEY) o la sesión no está configurada');
        return {
            ok: false,
            message: 'Faltan variables de entorno WAHA_BASE_URL / WAHA_API_KEY o sesión no configurada',
        };
    }

    const isMedia = !!imageUrl;
    const apiUrl = isMedia
        ? `${wahaBaseUrl}/api/sendFile`
        : `${wahaBaseUrl}/api/sendText`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'X-Api-Key': apiKey,
        };

        const payload = isMedia
            ? {
                session: resolvedSession,
                chatId: `${formattedPhone}@c.us`,
                caption: message,
                file: {
                    mimetype: imageUrl.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg',
                    filename: imageUrl.split('/').pop()?.split('?')[0] || 'image.jpg',
                    url: imageUrl,
                },
            }
            : {
                session: resolvedSession,
                chatId: `${formattedPhone}@c.us`,
                text: message,
            };

        const resp = await fetch(apiUrl, {
            method: 'POST',
            headers,
            signal: controller.signal,
            body: JSON.stringify(payload),
        });

        if (!resp.ok) {
            const body = await resp.text().catch(() => 'Unable to read response body');
            console.error('sendWhatsApp: error enviando mensaje', {
                status: resp.status,
                body,
            });
            return {
                ok: false,
                status: resp.status,
                message: body,
            };
        }

        const data = await resp.json().catch(() => null);
        return {
            ok: true,
            status: resp.status,
            data,
        };
    } catch (error) {
        console.error('sendWhatsApp: fallo de red o timeout', error);
        return {
            ok: false,
            error,
            message: error instanceof Error ? error.message : 'Error desconocido',
        };
    } finally {
        clearTimeout(timeout);
    }
};
