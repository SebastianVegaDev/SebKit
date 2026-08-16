export function openInNewTab(
    url: string
): Window | null {
    if (typeof window === "undefined") {
        return null;
    }

    return window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );
}