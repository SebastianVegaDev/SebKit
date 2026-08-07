export function contains(
    value: unknown,
    search: unknown
): boolean {
    if (
        typeof value !== "string" ||
        typeof search !== "string"
    ) {
        return false;
    }

    return value.includes(search);
}