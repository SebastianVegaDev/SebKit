export function hasMaxLength(
    value: unknown,
    maxLength: unknown
): boolean {
    if (typeof value !== "string") {
        return false
    }

    if (
        typeof maxLength !== "number" ||
        !Number.isInteger(maxLength) ||
        maxLength < 0
    ) {
        return false
    }

    return value.length <= maxLength
}