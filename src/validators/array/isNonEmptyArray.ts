export function isNonEmptyArray(
    value: unknown
): value is [unknown, ...unknown[]] {
    return Array.isArray(value) && value.length > 0
}