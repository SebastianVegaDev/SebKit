export interface FormatNumberOptions {
    locale?: string,
    minimumFractionDigits?: number,
    maximumFractionDigits?: number,
}

export function formatNumber(
    value: number,
    options: FormatNumberOptions = {},
): string {
    const {
        locale = "en-US",
        minimumFractionDigits = 0,
        maximumFractionDigits = 2,
    } = options;

    const formatter = new Intl.NumberFormat(locale, {
        minimumFractionDigits,
        maximumFractionDigits
    });

    return formatter.format(value);
}