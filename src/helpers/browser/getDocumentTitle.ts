export function getDocumentTitle(): string | undefined {
    if (typeof document === "undefined") {
        return undefined;
    }

    return document.title;
}