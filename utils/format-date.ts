const months = [
    'ene', 'feb', 'mar', 'abr', 'may', 'jun',
    'jul', 'ago', 'sep', 'oct', 'nov', 'dic'
];

export const formatDate = (date?: Date | string | null) => {
    if (!date) return '-';
    const d = new Date(date);
    if (Number.isNaN(d.getTime())) return '-';

    const isoString = d.toISOString();
    const [year, month, day] = isoString.split('T')[0].split('-');

    const formatted = `${day.padStart(2, '0')} ${months[parseInt(month) - 1]} ${year}`;
    return formatted;
};

export const formatTime = (date?: Date | string | null): string => {
    if (!date) return '';
    const d = new Date(date);
    if (Number.isNaN(d.getTime())) return '';

    return new Intl.DateTimeFormat('es-MX', {
        timeZone: 'America/Mexico_City',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    }).format(d);
};

export const formatInMexicoCity = (date: Date | string | null | undefined): string => {
    if (!date) return '';
    const d = new Date(date);
    if (Number.isNaN(d.getTime())) return '';

    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Mexico_City',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });

    const parts = formatter.formatToParts(d);
    let year = '', month = '', day = '', hour = '', minute = '';
    for (const part of parts) {
        if (part.type === 'year') year = part.value;
        if (part.type === 'month') month = part.value;
        if (part.type === 'day') day = part.value;
        if (part.type === 'hour') hour = part.value;
        if (part.type === 'minute') minute = part.value;
    }

    if (hour === '24') hour = '00';

    return `${year}-${month}-${day}T${hour}:${minute}`;
};

export const toDateTimeLocal = (date: Date | string) => {
    return formatInMexicoCity(date);
};

export const toMexicoCityISOString = (dateTimeLocalStr: string | null | undefined): string => {
    if (!dateTimeLocalStr) return '';
    // Limpiar posibles sufijos de zona horaria existentes
    const cleanStr = dateTimeLocalStr
        .trim()
        .replace(" ", "T")
        .split('Z')[0]
        .split(/[+-]\d{2}:?\d{2}$/)[0]
        .slice(0, 16);
    // Agregar desfase de America/Mexico_City (-06:00)
    const date = new Date(`${cleanStr}:00-06:00`);
    if (Number.isNaN(date.getTime())) return '';
    return date.toISOString();
};

export const getMexicoCityTimeParts = (date: Date | string) => {
    const d = new Date(date);
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Mexico_City',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
    });

    const parts = formatter.formatToParts(d);
    let year = 0, month = 0, day = 0, hour = 0, minute = 0;
    for (const part of parts) {
        if (part.type === 'year') year = parseInt(part.value, 10);
        if (part.type === 'month') month = parseInt(part.value, 10);
        if (part.type === 'day') day = parseInt(part.value, 10);
        if (part.type === 'hour') hour = parseInt(part.value, 10);
        if (part.type === 'minute') minute = parseInt(part.value, 10);
    }

    if (hour === 24) hour = 0;

    const localDate = new Date(year, month - 1, day);
    const dayOfWeek = localDate.getDay(); // 0 = Domingo, 6 = Sábado

    return {
        year,
        month,
        day,
        hour,
        minute,
        dayOfWeek,
    };
};

export const convertUTCToClinicLocal = (utcDateStr: string | Date): Date => {
    const clinicTimeStr = formatInMexicoCity(utcDateStr);
    if (!clinicTimeStr) {
        return new Date(Number.NaN);
    }
    return new Date(`${clinicTimeStr}:00-06:00`);
};

export const toISODate = (date: Date | string) => {
    const d = new Date(date);
    if (Number.isNaN(d.getTime())) {
        return '';
    }

    const parts = getMexicoCityTimeParts(d);
    if (!parts.year) return '';

    return `${parts.year}-${String(parts.month).padStart(2, '0')}-${String(parts.day).padStart(2, '0')}`;
};

export const formatShiftDateTime = (
    start: Date | string | null,
    end: Date | string | null
) => {
    if (!start || !end) {
        return {
            date: 'Fecha no disponible',
            startTime: '',
            endTime: '',
            endDate: '',
            crossesDay: false,
        };
    }

    const startDate = new Date(start);
    const endDate = new Date(end);

    if (
        Number.isNaN(startDate.getTime()) ||
        Number.isNaN(endDate.getTime())
    ) {
        return {
            date: 'Fecha no disponible',
            startTime: '',
            endTime: '',
            endDate: '',
            crossesDay: false,
        };
    }

    const dateFormatter = new Intl.DateTimeFormat('es-MX', {
        timeZone: 'America/Mexico_City',
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const timeFormatter = new Intl.DateTimeFormat('es-MX', {
        timeZone: 'America/Mexico_City',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    });

    const normalizeDate = (date: Date) => {
        const formatted = dateFormatter.format(date).replace(',', '');
        return formatted.charAt(0).toUpperCase() + formatted.slice(1);
    }

    const formattedStartDate = normalizeDate(startDate);
    const formattedEndDate = normalizeDate(endDate);
    const crossesDay = formattedStartDate !== formattedEndDate;
    return {
        date: formattedStartDate,
        endDate: formattedEndDate,
        crossesDay,
        startTime: timeFormatter.format(startDate),
        endTime: timeFormatter.format(endDate),
    };
};

export const DAY_NAMES_MAP: Record<number, string> = {
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
    0: 'Domingo',
};

export const DAY_NAMES_SHORT_MAP: Record<number, string> = {
    1: 'Lun',
    2: 'Mar',
    3: 'Mié',
    4: 'Jue',
    5: 'Vie',
    6: 'Sáb',
    0: 'Dom',
};

export const WEEK_DAYS_OPTIONS = [
    { label: 'Lun', value: 1 },
    { label: 'Mar', value: 2 },
    { label: 'Mié', value: 3 },
    { label: 'Jue', value: 4 },
    { label: 'Vie', value: 5 },
    { label: 'Sáb', value: 6 },
    { label: 'Dom', value: 0 },
];

export const formatRecurrenceDays = (days: number[]): string => {
    if (!days || days.length === 0) return '';
    const sorted = [...days].sort((a, b) => {
        const orderA = a === 0 ? 7 : a;
        const orderB = b === 0 ? 7 : b;
        return orderA - orderB;
    });
    const names = sorted.map((d) => DAY_NAMES_MAP[d]).filter(Boolean);
    if (names.length === 0) return '';
    if (names.length === 1) return names[0];
    if (names.length === 2) return `${names[0]} y ${names[1]}`;
    return `${names.slice(0, -1).join(', ')} y ${names[names.length - 1]}`;
};

const normalizeDateString = (value: string): string => {
    const trimmed = value.trim();
    const ddmmyyyyMatch = /^(\d{2})-(\d{2})-(\d{4})$/.exec(trimmed);
    if (ddmmyyyyMatch) {
        const [, d, m, y] = ddmmyyyyMatch;
        return `${y}-${m}-${d}`;
    }
    return trimmed;
};

export const startOfDayMexicoCity = (value: string): Date => {
    const normalized = normalizeDateString(value);
    if (normalized.includes('T')) {
        return new Date(normalized);
    }
    const date = new Date(`${normalized}T00:00:00.000-06:00`);
    return Number.isNaN(date.getTime()) ? new Date(normalized) : date;
};

export const endOfDayMexicoCity = (value: string): Date => {
    const normalized = normalizeDateString(value);
    if (normalized.includes('T')) {
        return new Date(normalized);
    }
    const date = new Date(`${normalized}T23:59:59.999-06:00`);
    return Number.isNaN(date.getTime()) ? new Date(normalized) : date;
};

export const formatKidAge = (
    birthdate?: Date | string | null,
    ageYears?: number | null
): string => {
    if (birthdate) {
        const birth = new Date(birthdate);
        if (!Number.isNaN(birth.getTime())) {
            const now = new Date();
            let years = now.getFullYear() - birth.getFullYear();
            let months = now.getMonth() - birth.getMonth();

            if (now.getDate() < birth.getDate()) {
                months--;
            }

            if (months < 0) {
                years--;
                months += 12;
            }

            if (years <= 0) {
                if (months <= 0) {
                    const diffTime = Math.abs(now.getTime() - birth.getTime());
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    return diffDays <= 1 ? '1 día' : `${diffDays} días`;
                }
                return months === 1 ? '1 mes' : `${months} meses`;
            }

            if (months === 0) {
                return years === 1 ? '1 año' : `${years} años`;
            }

            const yearLabel = years === 1 ? '1 año' : `${years} años`;
            const monthLabel = months === 1 ? '1 mes' : `${months} meses`;
            return `${yearLabel}, ${monthLabel}`;
        }
    }

    if (ageYears !== null && ageYears !== undefined) {
        if (ageYears === 0) return 'Menor de 1 año';
        return ageYears === 1 ? '1 año' : `${ageYears} años`;
    }

    return '-';
};
