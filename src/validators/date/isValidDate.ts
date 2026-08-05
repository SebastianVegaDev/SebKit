export function isValidDate(value: unknown): boolean {
    if (
        typeof value !== "string" &&
        typeof value !== "number" &&
        !(value instanceof Date)
    ) {
        return false;
    }

    const date = new Date(value);

    return !Number.isNaN(date.getTime());
}