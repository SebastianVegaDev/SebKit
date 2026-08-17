import { isErrorLike } from "./isErrorLike.js";

export function getErrorMessage(
    error: unknown,
    fallback = "Unknown error",
): string {
    if (typeof error === "string") {
        return error;
    }

    if (isErrorLike(error)) {
        return error.message;
    }

    return fallback;
}