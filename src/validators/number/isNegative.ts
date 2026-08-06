export function isNegative(
    value: unknown
): value is number {
    return typeof value === "number" && 
        value < 0;
}