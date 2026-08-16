export interface FormatCompactNumberOptions {
    locale?: string;
    compactDisplay?: Intl.NumberFormatOptions["compactDisplay"];
}

export function formatCompactNumber(
    value: number,
    options: FormatCompactNumberOptions = {},
): string {
    const {
        locale = "en-US",
        compactDisplay = "short",
    } = options;

    const formatter = new Intl.NumberFormat(locale, {
        notation: "compact",
        compactDisplay,
    });

    return formatter.format(value);
}