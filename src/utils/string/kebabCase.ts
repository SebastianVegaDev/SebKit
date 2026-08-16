export function kebabCase(
    value: string
): string {
    return value
        .trim()
        .toLowerCase()
        .split(/[\s_-]+/)
        .filter(Boolean)
        .join("-");
}