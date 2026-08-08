export function mapValues<T extends object, R>(
    object: T,
    valueMapper: (key: string, value: T[keyof T]) => R
): Record<string, R> {
    const result: Record<string, R> = {};

    for(const key of Object.keys(object)) {
        const value = object[key as keyof T];

        result[key] = valueMapper(key, value);
    }

    return result;
}   