interface FormatListOptions {
    locale?: string;
    style?: Intl.ListFormatStyle;
    type?: Intl.ListFormatType;
}

export function formatList(
    values: readonly string[],
    options: FormatListOptions = {}
): string {
    const {
        locale = "en",
        style = "long",
        type = "conjunction",
    } = options;

    const formatter = new Intl.ListFormat(locale, {
        style,
        type,
    });

    return formatter.format(values);
}