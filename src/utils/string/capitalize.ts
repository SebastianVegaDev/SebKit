export function capitalize(
    value: string
): string {
    const normalized = value.toLowerCase()

    if (normalized.length === 0) {
        return "";  
    }

    return normalized[0]?.toUpperCase() + normalized.slice(1);
}