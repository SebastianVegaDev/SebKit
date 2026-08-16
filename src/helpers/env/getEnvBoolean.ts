import { getEnv } from "./getEnv.js";

export function getEnvBoolean(key: string): boolean | undefined {
    const value = getEnv(key);

    if (value === undefined) {
        return undefined;
    }

    const normalizedValue = value.trim().toLowerCase();

    if (normalizedValue === "true") {
        return true
    }

    if (normalizedValue === "false") {
        return false
    }

    throw new TypeError(`Environment variable "${key}" must be "true" or "false"`)
}