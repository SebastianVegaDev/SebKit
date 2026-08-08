export function snakeCase(
    value: string
): string {
    return value
        .trim()
        .toLowerCase()
        .split(/[\s_-]+/)
        .filter(Boolean)
        .join("_");
}