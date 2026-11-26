/**
 * Limpia y formatea un número de teléfono para WhatsApp
 * @param phone - Número de teléfono a limpiar
 * @returns Número de teléfono formateado o null si no es válido
 */
export const cleanPhoneNumber = (phone: unknown): string | null => {
    try {
        // Verificar que el phone no sea null, undefined o vacío
        if (phone === null || phone === undefined) {
            return null;
        }

        // Convertir a string de manera segura
        let phoneStr: string;
        if (typeof phone === 'string') {
            phoneStr = phone.trim();
        } else if (typeof phone === 'number') {
            phoneStr = phone.toString();
        } else {
            phoneStr = String(phone).trim();
        }

        // Verificar que no esté vacío después del procesamiento
        if (!phoneStr || phoneStr === 'null' || phoneStr === 'undefined') {
            return null;
        }

        // Limpiar el número (remover espacios, guiones, paréntesis)
        const cleanPhone = phoneStr.replace(/[\s\-\(\)\+]/g, '');

        // Verificar que quede algo después de limpiar
        if (!cleanPhone) {
            return null;
        }

        // Verificar si ya tiene código de país y formatear
        let formattedPhone = '';
        if (cleanPhone.startsWith('1') && cleanPhone.length === 11) {
            // Ya tiene +1 (formato estadounidense), mantenerlo
            formattedPhone = cleanPhone;
        } else if (cleanPhone.startsWith('521') && cleanPhone.length === 13) {
            // Ya tiene 521 (código mexicano), mantenerlo
            formattedPhone = cleanPhone;
        } else if (cleanPhone.length === 10) {
            // Número mexicano sin código de país, agregar 521
            formattedPhone = '521' + cleanPhone;
        } else {
            // Para otros casos, usar el número tal como viene
            formattedPhone = cleanPhone;
        }

        return formattedPhone;

    } catch (error) {
        console.error('💥 Error en cleanPhoneNumber:', error, 'input:', phone);
        return null;
    }
};
