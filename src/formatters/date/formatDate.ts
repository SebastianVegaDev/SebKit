export interface FormatDateOptions {
    locale?: string;
    dateStyle?: Intl.DateTimeFormatOptions["dateStyle"]
}

export function formatDate(
    value: Date,
    options: FormatDateOptions = {},
): string {
    const {
        locale = "en-US",
        dateStyle = "medium",
    } = options

    const formatter = new Intl.DateTimeFormat(locale, {
        dateStyle,
    });

    return formatter.format(value);
}