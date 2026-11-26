export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount);
};

export function formatNumber(num: number) {
    return new Intl.NumberFormat("es-MX").format(num);
}

export function calculatePurchaseTotal(items: { kilos: number; price: number }[]) {
    return items.reduce((sum, item) => sum + item.kilos * item.price, 0);
}