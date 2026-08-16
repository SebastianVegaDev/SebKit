import { canUseClipboard } from "./canUseClipboard.js";

export async function copyToClipboard(text: string): Promise<void> {
    if (!canUseClipboard()) {
        throw new Error("Clipboard API is not available");
    }

    await navigator.clipboard.writeText(text);
}