const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;

export function isUsername(
    value: unknown
): boolean {
    return typeof value === "string" 
        && USERNAME_REGEX.test(value)
}