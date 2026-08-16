export function percentage(
    value: number,
    total: number,
): number {
    if (total === 0) {
        throw new RangeError("Total must not be zero");
    }

    return (value / total) * 100;
}