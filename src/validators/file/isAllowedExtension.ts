export function isAllowedExtension(
    filename: unknown,
    allowedExtensions: readonly string[]
): boolean {
    if (typeof filename !== "string") {
        return false;
    }

    const extension = filename
        .split(".")
        .pop()
        ?.toLowerCase();

    if (!extension) {
        return false
    }

    return allowedExtensions
        .map((value) => value.toLocaleLowerCase().replace(/^\./,""))
        .includes(extension);
}