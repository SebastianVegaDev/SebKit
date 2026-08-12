export function sum(
    ...values: number[]
): number {
    let total = 0;

    for (const value of values) {
        if (!Number.isFinite(value)) {
            throw new TypeError("all values must be finite numbers");
        }

        total += value;
    }

    return total;
}