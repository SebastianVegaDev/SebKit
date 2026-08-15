export interface FormatCompactCurrencyOptions {
    locale?: string;
    currency?: string;
}

export function formatCompactCurrency(
    value: number,
    options: FormatCompactCurrencyOptions = {},
): string {
    const {
        locale = "en-US",
        currency = "USD",
    } = options;

    const formatter = new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        notation: "compact",
        compactDisplay: "short", 
    })

    return formatter.format(value);
}