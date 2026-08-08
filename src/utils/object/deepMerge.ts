export function deepMerge<T extends object, U extends object>(
    target: T,
    source: U
): T & U  {
    const result = { ...target} as T & U;

    for (const key in result) {
        const sourceValue = source[key as keyof U];
        const targetValue = target[key as keyof T];

        const canMerge = sourceValue !== null &&
            typeof sourceValue === "object" &&
            !Array.isArray(sourceValue) &&
            targetValue !== null &&
            typeof targetValue === "object" &&
            !Array.isArray(targetValue)

        if (canMerge) {
            (result as Record<string, unknown>)[key] = deepMerge(
                targetValue,
                sourceValue
            );
        } else {
            (result as Record<string, unknown>)[key] = sourceValue
        }
    }

    return result
}