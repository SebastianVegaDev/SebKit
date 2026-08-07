export function isOdd(
    value: unknown
): value is number {
    return typeof value === "number" &&
        Math.abs(value % 2) === 1;
}