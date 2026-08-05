export function isPlainObject(
    value: unknown
): value is Record<PropertyKey, unknown> {
    if (
        typeof value !== "object" ||
        value === null
    ) {
        return false;
    }

    return Object.getPrototypeOf(value) === Object.prototype;
}