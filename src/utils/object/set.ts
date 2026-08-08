export function set<T extends object>(
    object: T,
    path: string,
    value: unknown
): void {
    const keys = path.split(".");

    let current: Record<string, unknown> =
        object as Record<string, unknown>;

    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i]!;

        if (
            current[key] === null ||
            typeof current[key] !== "object" ||
            Array.isArray(current[key])
        ) {
            current[key] = {};
        }

        current = current[key] as Record<string, unknown>;
    }

    current[keys[keys.length - 1]!] = value;
}