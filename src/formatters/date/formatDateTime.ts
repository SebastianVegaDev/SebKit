export interface FormatDateTimeOptions {
    locale?: string;
    dateStyle?: Intl.DateTimeFormatOptions["dateStyle"];
    timeStyle?: Intl.DateTimeFormatOptions["timeStyle"];
}

export function formatDateTime(
    value: Date,
    options: FormatDateTimeOptions = {},
): string {
    const {
        locale = "en-US",
        dateStyle = "medium",
        timeStyle = "short",
    } = options;

    const formatter = new Intl.DateTimeFormat(locale, {
        dateStyle,
        timeStyle,
    })

    return formatter.format(value);
}