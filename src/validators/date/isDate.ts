export function isDate(value: unknown): boolean {
    return value instanceof Date && !Number.isNaN(value.getTime());
}