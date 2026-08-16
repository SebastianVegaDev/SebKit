export function sleep(milliseconds: number): Promise<void> {
    if (!Number.isFinite(milliseconds)|| milliseconds < 0) {
        throw new RangeError("milliseconds must be a non-negative finite number");
    }

    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    })
}