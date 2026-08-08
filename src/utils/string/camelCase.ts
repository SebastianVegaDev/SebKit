export function camelCase(
    value: string
): string {
    const words = value
        .trim()
        .toLowerCase()
        .split(/[\s_-]+/)
        .filter(Boolean);

    if (words.length === 0) {
        return "";
    }

    return words[0] + words
        .slice(1)
        .map((word) => word[0]?.toUpperCase() + word.slice(1))
        .join("")
}