export function average(
    numbers: readonly number[]
): number {
    if (numbers.length === 0) {
        return 0;
    }

    for (const number of numbers) {
        if (!Number.isFinite(number)) {
            throw new TypeError("all values must be finite numbers");
        }
    }

    const total = numbers.reduce((sum, number) => sum + number, 0);

    return total / numbers.length;
}
