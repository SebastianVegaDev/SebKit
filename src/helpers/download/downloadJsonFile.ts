import { downloadBlob } from "./downloadBlob.js";

export function downloadJsonFile(
    value: unknown,
    filename: string,
): void {
    const json = JSON.stringify(value, null, 2);

    if (json === undefined) {
        throw new TypeError("Value cannot be serialized to JSON");
    }

    const blob = new Blob(
        [json],
        { type: "application/json;charset=utf-8" }
    )

    downloadBlob(blob, filename);
}