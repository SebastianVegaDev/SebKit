export function matchesRegex(
    value: unknown,
    regex: unknown
): boolean {
    if(typeof value !== "string") {
        return false;
    }

    if (!(regex instanceof RegExp)) {
        return false;
    }

    return regex.test(value);
}