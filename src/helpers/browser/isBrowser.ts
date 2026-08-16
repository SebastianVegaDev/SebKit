export function isBrowser(): boolean {
    return (
        typeof Window !== "undefined" &&
        typeof document !== "undefined"
    )
}