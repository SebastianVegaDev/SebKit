export function hasDuplicates<T>(
    array: readonly T[]
): boolean {
    return new Set(array).size !== array.length; 
}