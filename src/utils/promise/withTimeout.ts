class TimeoutError extends Error {
    constructor(message = "Operation timed out") {
        super(message);
        this.name = "TimeoutError";
    }
}

export async function withTimeout<T>(
    promise: PromiseLike<T>,
    milliseconds: number
): Promise<T> {
    if (!Number.isFinite(milliseconds) || milliseconds < 0) {
        throw new RangeError(
            "milliseconds must be a finite number greater than or equal to 0"
        );
    }

    let timeoutId: ReturnType<typeof setTimeout>;

    const timeoutPromise = new Promise<never>((_, reject) => {
            timeoutId = setTimeout(() => {
                reject(new TimeoutError());
        }, milliseconds);
    });

    try {
        return await Promise.race([
            Promise.resolve(promise),
            timeoutPromise,
        ]);
    } finally {
        clearTimeout(timeoutId!);
    }
}