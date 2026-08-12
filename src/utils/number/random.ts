export function random(
    min: number,
    max: number
): number {
    if (!Number.isFinite(min) || !Number.isFinite(max)) {
        throw new TypeError("min and max must be finite numbers")
    }

    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        throw new TypeError("min and max must be integers")
    }

    if ( min > max ) {
        throw new RangeError("min cannot be greater than max")
    }

    return Math.floor(Math.random() * (max - min) + 1) + min
}