export function difference<T>(
    array: readonly T[],
    values: readonly T[]
): T[] {
    return array.filter((item) => !values.includes(item));
}