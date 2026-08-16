import { getEnv } from "./getEnv.js";

export function getEnvNumber(key: string): number | undefined {
    const value = getEnv(key);

    if (value === undefined) {
        return undefined;
    }

    if (value.trim() === "") {
        throw new Error(`Environment variable "${key}" must be a valid number`);
    }

    const number = Number(value);

    if (!Number.isFinite(number)) {
        throw new Error(`Environment variable "${key}" must be a valid number`);
    }

    return number;
}