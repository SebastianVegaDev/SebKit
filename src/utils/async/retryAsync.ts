export async function retryAsync<T>(
    callback: () => Promise<T>,
    attempts: number
): Promise<T> {
    if (!Number.isInteger(attempts) || attempts === 0) {
        throw new RangeError("attempts must be a positive integer");
    }

    let lastError: unknown;

    for (let attempt = 1; attempt <= attempts; attempt++) {
        try {
            return await callback();
        } catch(error: unknown) {
            lastError = error;
        }
    }

    throw lastError
}