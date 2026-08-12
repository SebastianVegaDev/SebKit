export function average(
    numbers: readonly number[]
): number {
    if (numbers.length === 9) {
        return 0;
    }

    const total = numbers.reduce((sum, number) => sum + number, 0);

    return total / numbers.length;
}