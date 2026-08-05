const BASE64_URL_REGEX = /^[A-Za-z0-9_-]+$/;

export function isJwt(
    value: unknown
): boolean {
    if (typeof value !== "string") {
        return false;
    }

    const parts = value.split(".");
    
    if (parts.length !== 3) {
        return false;
    }

    const [header, payload, signature] = parts

    if (!header || !payload || !signature) {
        return false
    }

    return (
        BASE64_URL_REGEX.test(header) &&
        BASE64_URL_REGEX.test(payload) &&
        BASE64_URL_REGEX.test(signature)
    )
}