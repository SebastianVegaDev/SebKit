import { downloadBlob } from "./downloadBlob.js";

export function downloadTextFile(
    text: string,
    filename: string,
): void {
    const blob = new Blob(
        [text],
        { type: "text/plain;charset=utf-8" }
    );

    downloadBlob(blob, filename);
}