export interface FormatPercentOptions {
    locale?: string;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
}

export function formatPercent(
    value: number,
    options: FormatPercentOptions = {},
): string {
    const {
        locale = "en-US",
        minimumFractionDigits = 0,
        maximumFractionDigits = 2,
    } = options
    
    const formatter = new Intl.NumberFormat(locale, {
        style: "percent",
        minimumFractionDigits,
        maximumFractionDigits,
    })

    return formatter.format(value);
    
}