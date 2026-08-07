const STRONG_PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

export function isPasswordStrong(
    value: unknown
): boolean {
    return typeof value === "string" 
        && STRONG_PASSWORD_REGEX.test(value)
}