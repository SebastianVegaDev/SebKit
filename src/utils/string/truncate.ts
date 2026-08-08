export function truncate(
    value: string,
    maxLength: number,
): string {
    if (maxLength < 0) {
        throw new RangeError("maxLength must be non-negative");
    } 

    if (value.length <= maxLength) {
        return value;
    }

    if (maxLength < 3) {
        return ".".repeat(maxLength);
    }

    return value.slice(0, maxLength - 3) + "...";
}