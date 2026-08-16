export function race<T>(
    promises: readonly (T | PromiseLike<T>)[],
): Promise<Awaited<T>> {
    if (promises.length === 0) {
        return Promise.reject(
            new Error("race requires at least one promise."),
        );
    }

    return Promise.race(promises);
}