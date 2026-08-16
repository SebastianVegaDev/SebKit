type Flatten<T> = T extends readonly (infer U)[]
    ? Flatten<U>
    : T

export function flatten<T>(
    array: readonly T[]
): Flatten<T>[] {
    return array.reduce<Flatten<T>[]>((acc, item) => {
        if (Array.isArray(item)) {
            acc.push(...flatten(item));
        } else {
            acc.push(item as Flatten<T>)
        }

        return acc
    }, []);
}