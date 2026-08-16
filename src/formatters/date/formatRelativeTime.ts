export interface FormatRelativeTimeOptions {
    locale?: string;
    numeric?: Intl.RelativeTimeFormatNumeric;
}

export function formatRelativeTime(
    milliseconds: number,
    options: FormatRelativeTimeOptions = {},
): string {
    if (!Number.isFinite(milliseconds) || milliseconds < 0) {
        throw new RangeError("milliseconds must be a finite number");
    }

    const {
        locale = "en-US",
        numeric = "auto"
    } = options;

    const formatter = new Intl.RelativeTimeFormat(locale, {
        numeric,
    });

    const seconds = milliseconds / 1000;
    const absoluteSeconds = Math.abs(seconds);

    if (absoluteSeconds < 60) {
        return formatter.format(Math.round(seconds), "second");
    } 

    const minutes = seconds / 60;

    if (absoluteSeconds < 3600) {
        return formatter.format(Math.round(minutes), "minute");
    } 
    
    const hours = minutes / 60;

    if (absoluteSeconds < 60) {
        return formatter.format(Math.round(hours), "hour");
    } 
    
    const days = hours / 24;

    if (absoluteSeconds < 60) {
        return formatter.format(Math.round(days), "day");
    } 
    
    const months = days / 30;

    if (absoluteSeconds < 60) {
        return formatter.format(Math.round(months), "month");
    } 
    
    const years = days / 365;

    return formatter.format(Math.round(years), "year");
}