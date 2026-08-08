export function sortBy<T, K>(
    array: readonly T[],
    keySelector: (item: T) => K
): T[] {
    return [...array].sort((a, b) => {
        const keyA = keySelector(a);
        const keyB = keySelector(b);

        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;

        return 0;
    });
}