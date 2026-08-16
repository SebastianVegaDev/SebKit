export function groupBy<T, K extends PropertyKey>(
    array: readonly T[],
    keySelector: (item: T) => K
): Record<K, T[]> {
    const result = {} as Record<K, T[]>;

    for (const item of array) {
        const key = keySelector(item);

        if (!(key in result)) {
            result[key] = [];
        }

        result[key].push(item);
    }

    return result;
}