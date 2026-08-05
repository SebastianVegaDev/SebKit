export function isLeapYear(value: unknown): boolean {
    if (typeof value !== "number" || !Number.isInteger(value)) {
        return false;
    }

    return value % 4 ===  0 &&
        (value % 100 !== 0 || value % 400 === 0)
}