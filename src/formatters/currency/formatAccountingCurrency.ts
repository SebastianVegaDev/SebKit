export interface FormatAccountingCurrencyOptions {
    locale?: string;
    currency?: string;
}

export function formatAccountingCurrency(
    value: number,
    options: FormatAccountingCurrencyOptions = {},
): string {
    const {
        locale = "en-US",
        currency = "USD",
    } = options;

    const formatter = new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        currencySign: "accounting", 
    })

    return formatter.format(value);
}