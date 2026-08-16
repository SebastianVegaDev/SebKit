export function hasEnv(key: string): boolean {
    if (typeof process === "undefined") {
        return false;
    }

    return process.env[key] !== undefined;
}