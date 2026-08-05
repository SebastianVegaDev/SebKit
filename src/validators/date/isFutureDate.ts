export function isFutureDate(value: unknown): boolean {
    if (!(value instanceof Date)) {
        return false;
    }

    const timestamp = value.getTime();

    return !Number.isNaN(timestamp)
        && timestamp > Date.now();
}