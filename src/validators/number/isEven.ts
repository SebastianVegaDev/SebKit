export function isEven(
    value: unknown
): value is number {
    return typeof value === "number" &&
        value % 2 === 0;
}