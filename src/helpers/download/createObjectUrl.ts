export function createObjectUrl(blob: Blob): string {
    if (typeof URL === "undefined" || typeof URL.createObjectURL !== "function") {
        throw new Error("Object URLs are not supported");
    }

    return URL.createObjectURL(blob);
}