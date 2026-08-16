export function reverse(
    value: string
): string {
    let result = "";

    for (let i = value.length - 1; i >= 0 ; i--) {
        result += value[i];
    }

    return result;
}