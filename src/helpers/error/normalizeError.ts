import { getErrorMessage } from "./getErrorMessage.js";

export function normalizeError(
    error: unknown
): Error {
    if (error instanceof Error) {
        return error;
    }

    return new Error(
        getErrorMessage(error)
    );
}