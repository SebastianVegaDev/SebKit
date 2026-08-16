export function chunk<T>(
    array: readonly T[],
    size: number
): T[][] {
    if (size <= 0) {
        throw new RangeError("size must be greater than 0");
    }

    const result: T[][] = [];

    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }

    return result;
}