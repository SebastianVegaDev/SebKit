export interface FormatInitialsOptions {
    maxInitials?: number;
    separator?: string;
}

export function formatInitials(
    value: string,
    options: FormatInitialsOptions = {},
): string {
    const {
        maxInitials,
        separator = "",
    } = options;

    if (
        maxInitials !== undefined &&
        (!Number.isInteger(maxInitials) || maxInitials < 1)
    ) {
        throw new RangeError("maxInitials must be a positive integer");
    }

    const words = value
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    const selectedWords = maxInitials === undefined
        ? words
        : words.slice(0, maxInitials);

    return selectedWords
        .map((word) => word.charAt(0).toUpperCase())
        .join(separator);
}
