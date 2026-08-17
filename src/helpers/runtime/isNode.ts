export function isNode(): boolean {
    return (
        typeof process !== "undefined" &&
        typeof process.versions === "object" &&
        typeof process.versions.node === "string"
    )
}