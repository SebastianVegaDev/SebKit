export function revokeObjectUrl(url: string): void {
    if (typeof URL === "undefined" || typeof URL.revokeObjectURL !== "function") {
        return;
    }

    URL.revokeObjectURL(url);
}