export function shuffle<T>(
    array: readonly T[]
): T[] {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        const current = result[i]!;
        const random = result[j]!;

        result[i] = random;
        result[j] = current;
    }

    return result;
}