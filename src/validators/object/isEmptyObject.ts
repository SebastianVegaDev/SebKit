export function isEmptyObject(
    value: unknown
): boolean {
    if (
        typeof value !== "object" ||
        value === null ||
        Array.isArray(value)
    ) {
        return false;
    }

    return Object.keys(value).length === 0;
}
