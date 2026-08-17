export function canUseClipboard(): boolean {
    if (typeof navigator === "undefined") {
        return false;
    }

    return typeof navigator.clipboard !== "undefined" ;
}
