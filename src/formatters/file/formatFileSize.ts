import { formatBytes } from "./formatBytes.js";

export interface FormatFileSizeOptions {
    decimals?: number;
}

export function formatFileSize(
    file: { readonly size: number },
    options: FormatFileSizeOptions = {}
): string {
    return formatBytes(file.size, options);
}