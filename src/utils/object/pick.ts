export function pick<T extends object>(
    object: T,
    keys: readonly (keyof T)[]
): Partial<T> {
    const result: Partial<T> = {};

    for (const key of keys) {
        if (key in object) {
            result[key] = object[key];
        }
    }

    return result;
}