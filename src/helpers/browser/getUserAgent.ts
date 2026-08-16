export function getUserAgent(): string | undefined {
    if (typeof navigator === "undefined") {
        return undefined;
    } 

    return navigator.userAgent;
}