export function omit<T extends object>(
    object: T,
    keys: readonly (keyof T)[]
): Partial<T> {
    const result: Partial<T> = {};

    for (const key of Object.keys(object) as (keyof T)[]) {
        if (!keys.includes(key)) {
            result[key] = object[key];
        }
    }

    return result;
}