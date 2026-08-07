export function isUnique<T>(
    array: readonly T[],
): boolean {
    return new Set(array).size === array.length;
}