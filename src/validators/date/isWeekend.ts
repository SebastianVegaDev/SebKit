export function isWeekend(value: unknown): boolean {
    if (!(value instanceof Date)) {
        return false;
    }

    const day = value.getDay();

    return day === 0 || day === 6;
}