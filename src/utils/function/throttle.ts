export function throttle<TArgs extends unknown[]>(
    callback: (...args: TArgs) => void,
    delay: number
): (...args: TArgs) => void {
    let lastExecution = 0;

    return (...args: TArgs): void => {
        const now = Date.now();

        if (now - lastExecution < delay) {
            return;
        }

        lastExecution = now;

        callback(...args);
    };
}