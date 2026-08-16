export function debounce<TArgs extends unknown[]> (
    callback: (...args: TArgs) => void,
    delay: number
): (...args: TArgs) => void {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    return (...args: TArgs): void => {
        if (timeoutId !== undefined) {
            clearTimeout(timeoutId);
        } 

        timeoutId = setTimeout(() => {
            callback(...args);
        }, delay)
    }
}