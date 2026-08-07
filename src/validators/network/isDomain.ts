const DOMAIN_REGEX =
    /^(?!-)(?:[a-zA-Z0-9-]{1,63}(?<!-)\.)+[a-zA-Z]{2,63}$/;

export function isDomain(
    value: unknown
): value is string {
    return typeof value === "string"
        && DOMAIN_REGEX.test(value);
}