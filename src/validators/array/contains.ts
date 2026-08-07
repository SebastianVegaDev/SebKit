export function contains<T> (
    array: readonly T[],
    value: T
): boolean {
    return array.includes(value);
}