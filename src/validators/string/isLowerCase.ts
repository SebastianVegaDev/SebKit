export function isLowerCase(
    value: unknown
): value is string {
    if (typeof value !== "string") {
        return false;
    }

    if (value.length === 0) {
        return false
    }

    return value === value.toLowerCase() &&
        /[a-z]/.test(value);
}