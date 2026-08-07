export function hasLength<T>(
    array: readonly T[],
    expectedLength: number
): boolean {
    if (!Number.isInteger(expectedLength) || length < 0) {
        return false
    }

    return array.length === expectedLength;
}