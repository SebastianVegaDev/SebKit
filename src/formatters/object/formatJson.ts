export interface FormatJSONOptions {
    spaces?: number;
}

export function formatJSON(
    value: unknown,
    options:  FormatJSONOptions = {},
): string {
    const {
        spaces = 2,
    } = options;

    if (!Number.isFinite(spaces) || spaces < 0 || spaces > 10) {
        throw new RangeError("spaces must be an integer between 0 and 10");
    }

    const result = JSON.stringify(value, null, spaces);

    if (result === undefined) {
        throw new TypeError("value cannot be serialized to JSON");
    }

    return result;
}