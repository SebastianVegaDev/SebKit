export function mapKeys<T extends object>(
    object: T,
    keyMapper: (key: string, value: unknown) => string
): Record<string, unknown> {
    const result: Record<string, unknown> = {};

    for(const key of Object.keys(object)) {
        const value = object[key as keyof T];
        const newKey = keyMapper(key, value);

        result[newKey] = value;
    }

    return result;
}