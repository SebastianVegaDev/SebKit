export function hasPath<T>(
    object: T,
    path: string
): boolean {
    const keys = path.split(".");
    let current: unknown = object;

    for (const key of keys) {
        if (
            current === null ||
            typeof current !== "object" ||
            !(key in current)
        ) {
            return false;
        }

        current = (current as Record<string, unknown>)[key];
    }

    return true;
}