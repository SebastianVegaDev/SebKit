import { canUseClipboard } from "./canUseClipboard.js";

export async function readFromClipboard(): Promise<string> {
    if (!canUseClipboard()) {
        throw new Error("Clipboard API is not available");
    }

    return navigator.clipboard.readText();

}