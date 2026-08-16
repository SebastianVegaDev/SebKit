export function round(
    value: number,
    precision = 0
): number {
    if (!Number.isFinite(value)) {
        throw new TypeError("value must be a finite number")
    }

    if (!Number.isInteger(precision)) {
        throw new TypeError("value must be an integer");
    }

    if (precision < 0) {
        throw new RangeError("precision cannot be negative");
    }

    const factor = 10 ** precision;

    return Math.round(value * factor) / factor
}                   