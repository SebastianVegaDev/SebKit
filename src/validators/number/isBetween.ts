export function isBetween(
    value: unknown,
    min: number,
    max: number
): value is number {
    return typeof value === "number" &&
        value >= min &&
        value <= max;
}
