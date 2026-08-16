export class TimeoutError extends Error {
    constructor(message = "Operation timed out") {
        super(message);
        this.name = "TimeoutError";
    }
}

export async function timeout<T>(
    promise: Promise<T>,
    milliseconds: number
): Promise<T> {
    if (!Number.isFinite(milliseconds) || milliseconds < 0) {
        throw new RangeError("milliseconds must be a non-negative finite number");
    }

    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const timeoutPromise = new Promise<never>((_, reject) => {
        timeoutId = setTimeout(() => {
            reject(new TimeoutError());
        }, milliseconds);
    });

    try {
        return await Promise.race([
            promise,
            timeoutPromise
        ]);
    } finally {
        if (timeoutId !==  undefined) {
            clearTimeout(timeoutId);
        }
    }
}