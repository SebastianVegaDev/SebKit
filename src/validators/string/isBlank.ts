export function isBlank(
    value: unknown
): boolean {
    if (typeof value !== "string") {
        return false
    }

    return value.trim().length === 0
}