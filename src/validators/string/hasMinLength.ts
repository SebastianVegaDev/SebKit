export function hasMaxLength(
    value: unknown,
    minLength: unknown
): boolean {
    if (typeof value !== "string") {
        return false
    }

    if (
        typeof minLength !== "number" ||
        !Number.isInteger(minLength) ||
        minLength < 0
    ) {
        return false
    }

    return value.length >= minLength
}