export function formatTitleCase(value: string): string {
    return value
        .trim()
        .split(/\s+/)
        .map((word) => {
            const firstCharacter = word.charAt(0).toUpperCase();
            const rest = word.slice(1).toLowerCase();

            return firstCharacter + rest
        })
        .join(" ");
}