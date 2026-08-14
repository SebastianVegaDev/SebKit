export function once<TArgs extends unknown[], TResult>(
    callback: (...args: TArgs) => TResult
): (...args: TArgs) => TResult {
    let called = false;
    let result: TResult;

    return (...args: TArgs): TResult => {
        if (!called) {
            result = callback(...args);
            called = true;
        }

        return result;
    } 
}