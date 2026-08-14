export function reject(
    reason: unknown
): Promise<never> {
    return Promise.reject(reason);
}