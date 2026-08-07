const IMAGE_MIME_REGEX = /^image\/[a-zA-Z0-9.+-]+$/;

export function isImageMime(
    value: unknown
): boolean {
    return typeof value === "string"
        && IMAGE_MIME_REGEX.test(value);
}