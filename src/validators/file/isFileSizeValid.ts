export function isFileSizeValid(
    size: unknown,
    maxSize: number
): size is number {
    return typeof size === "number" &&
        Number.isFinite(size) &&
        size >= 0 &&
        size <= maxSize;
}