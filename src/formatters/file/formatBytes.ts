export interface FormatBytesOptions {
    decimals?: number;
}

export function formatBytes(
    bytes: number,
    options: FormatBytesOptions = {},
): string {
    if (!Number.isFinite(bytes) || bytes < 0) {
        throw new RangeError("bytes must be a non-negative finite number");
    }

    const {
        decimals = 2,
    } = options;

    if (!Number.isInteger(decimals) || decimals < 0) {
        throw new RangeError("decimals must be a non-negative integer");
    }

    if (bytes === 0) {
        return "0 B";
    }

    const units = ["B", "KB", "GB", "TB", "PB"] as const;
    const base = 1024;

    const unitIndex = Math.min(
        Math.floor(Math.log(bytes) / Math.log(base)),
        units.length - 1
    );

    const value = bytes / base ** unitIndex;

    return `${Number(value.toFixed(decimals))} ${units[unitIndex]}`;
}
