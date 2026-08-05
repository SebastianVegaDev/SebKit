export function hasKey(
    value: unknown,
    key: unknown
): boolean {
    if (
        typeof value !== "object" || 
        value === null
    ) {
        return false;
    }

    if (typeof key !== "string") {
        return false;
    }

    return key in value;
}