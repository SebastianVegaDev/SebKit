const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isEmail(
    value: unknown
): boolean {
    return typeof value === "string"
        && EMAIL_REGEX.test(value);
}