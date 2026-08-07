const IPV4_REGEX =
    /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/;

export function isIPv4(
    value: unknown
): value is string {
    return typeof value === "string"
        && IPV4_REGEX.test(value);
}