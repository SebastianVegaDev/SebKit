import { createObjectUrl } from "./createObjectUrl.js";
import { revokeObjectUrl } from "./revokeObjectUrl.js";

export function downloadBlob(
    blob: Blob,
    filename: string,
): void {
    if (typeof document === "undefined") {
        throw new Error("File download is only available in browser environments");
    }
    
    const url = createObjectUrl(blob);

    try {
        const anchor = document.createElement("a");

        anchor.href = url;
        anchor.download = filename;

        anchor.click();
    } finally {
        revokeObjectUrl(url);
    }
}