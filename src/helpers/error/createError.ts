export interface CreateErrorOptions {
    cause?: unknown;
}

export function createError(
    message: string,
    options: CreateErrorOptions = {},
): Error {
    const error = new Error(message);

    if (options.cause !== undefined) {
        error.cause = options.cause;
    }

    return error;
}