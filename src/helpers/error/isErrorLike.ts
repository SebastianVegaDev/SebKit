export interface ErrorLike {
    message: string;
}

export function isErrorLike(
    value: unknown
): value is ErrorLike {
    if (
        typeof value !== "object" ||
        value === null
    ) {
        return false;
    }

    return (
        "message" in value &&
        typeof value.message === "string"
    );
}