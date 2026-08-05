export function hasKeys(
    value: unknown,
    keys: unknown
): boolean {
    if (
        typeof value !== "object" || 
        value === null
    ) {
        return false;
    }

    if (!Array.isArray(keys)) {
        return false;
    }

    if (!keys.every(
        key => typeof key === "string"
    )) {
        return false;
    }

    return keys.every(
        key => key in value
    );
}