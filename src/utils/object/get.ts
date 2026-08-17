export function get<T>(
    object: T,
    path: string
): unknown {
    const keys = path.split(".");
    let current: unknown = object;

    for (const key of keys) {
        if (
            current === null ||
            typeof current !== "object"
        ) {
            return undefined;
        }

        current = (current as Record<string, unknown>)[key];
    }

    return current;
}
