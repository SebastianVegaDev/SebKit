export function startsWith(
    value: unknown,
    search: unknown
): boolean {
    if (
        typeof value !== "string" ||
        typeof search !== "string"
    ) {
        return false;
    }

    return value.startsWith(search);
}