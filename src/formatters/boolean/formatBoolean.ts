interface FormatBooleanOptions {
    trueLabel?: string;
    falseLabel?: string;
}

export function formatBoolean(
    value: boolean,
    options: FormatBooleanOptions,
): string {
    const {
        trueLabel = "Yes",
        falseLabel = "No",
    } = options;

    return value ? trueLabel : falseLabel;
}