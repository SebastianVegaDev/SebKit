export function resolve<T>(
    value: T | PromiseLike<T>
): Promise<T> {
    return Promise.resolve(value);
}