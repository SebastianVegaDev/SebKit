export interface FormatCurrencyOptions {
    locale?: string;
    currency?: string;
}

export function formatCurrency(
    value: number,
    options: FormatCurrencyOptions = {},
): string {
    const {
        locale = "en-US",
        currency = "USD",
    } =  options;

    const formatter = new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
    })

    return formatter.format(value);
}
