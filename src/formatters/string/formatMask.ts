export interface FormatMaskOptions {
    placeholder?: string;
}

export function formatMask(
    value: string,
    mask: string,
    options: FormatMaskOptions = {}
): string {
    const {
        placeholder = "#",
    } = options;

    if (placeholder.length !== 1) {
        throw new RangeError("placeholder must contain exactly one character");
    }

    let valueIndex = 0;
    let result = "";

    for (const character of mask) {
        if (character === placeholder) {
            if (valueIndex >= value.length) {
                break;
            }

            result += value[valueIndex];
            valueIndex++;
        } else {
            result += character;
        }
    }

    return result;
}