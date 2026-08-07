export function isPdf(
    filename: unknown,
): boolean {
    if (typeof filename !== "string") {
        return false;
    }

    return typeof filename === "string" &&
        filename.toLowerCase().endsWith(".pdf")
}