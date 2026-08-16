export function formatOrdinal(value: number): string {
    if (!Number.isInteger(value)) {
        throw new RangeError("value must be an integer");
    }

    const absoluteValue = Math.abs(value);
    const lastTwoDigits = absoluteValue % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return `${value}th`
    }

    const lastDigit = absoluteValue % 10;

    switch (lastDigit) {
        case 1:
            return `${value}st`;

        case 2:
            return `${value}nd`;

        case 3:
            return `${value}rd`;

        default:
            return `${value}th`;
    }
}