export function isEmptyObject(
    value: unknown
): boolean {
    if (
        typeof value !== "string" ||
        value === null ||
        Array.isArray(value)
    ) {
        return false;
    }

    return Object.keys(value).length === 0;
}