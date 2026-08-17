export interface AllSettledResult<T> {
    fulfilled: T[],
    rejected: unknown[],
}

export async function allSettled<T>(
    promises: Iterable<T | PromiseLike<T>>
): Promise<AllSettledResult<T>> {
    const results = await Promise.allSettled(promises);

    const fulfilled: T[] = [];
    const rejected: unknown[] = [];

    for (const result of results) {
        if (result.status === "fulfilled") {
            fulfilled.push(result.value);
        } else {
            rejected.push(result.reason)
        }
    }

    return {
        fulfilled,
        rejected
    }
}
