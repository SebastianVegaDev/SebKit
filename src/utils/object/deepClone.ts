export function deepClone<T>(
    value: T
): T {
    if (Array.isArray(value)) {
        const result: unknown[] = [];

        for (const item of value) {
            result.push(deepClone(item));
        }

        return result as T;
    }

    if (value !== null && typeof value === "object") {
        const result: Record<PropertyKey, unknown> = {};

        for (const key of Reflect.ownKeys(value)) {
            result[key] = deepClone(
                (value as Record<PropertyKey, unknown>)[key]
            );
        }

        return result as T
    }

    return value
}