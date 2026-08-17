export function deepMerge<T extends object, U extends object>(
    target: T,
    source: U
): T & U  {
    const result = { ...target} as T & U;
    const targetRecord = target as Record<string, unknown>;
    const sourceRecord = source as Record<string, unknown>;
    const resultRecord = result as Record<string, unknown>;

    for (const key in source) {
        const sourceValue = sourceRecord[key];
        const targetValue = targetRecord[key];

        const canMerge = sourceValue !== null &&
            typeof sourceValue === "object" &&
            !Array.isArray(sourceValue) &&
            targetValue !== null &&
            typeof targetValue === "object" &&
            !Array.isArray(targetValue)

        if (canMerge) {
            resultRecord[key] = deepMerge(
                targetValue,
                sourceValue
            );
        } else {
            resultRecord[key] = sourceValue
        }
    }

    return result
}
