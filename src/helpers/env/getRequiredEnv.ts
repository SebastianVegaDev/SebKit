import { getEnv } from "./getEnv.js";

export function getRequiredEnv(key: string): string {
    const value = getEnv(key);

    if (value === undefined || value.trim() === "") {
        throw new Error(`Missing required environment variable: ${key}`);
    }

    return value;
}