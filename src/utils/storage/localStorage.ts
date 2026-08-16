export interface LocalStorageOptions {
    serialize?: boolean;
}

function ensureBrowser(): void {
    if (typeof window === "undefined" || typeof window.localStorage === "undefined") {
        throw new Error("localStorage utilities are only available in browser environments");
    }
    }

    function validateKey(key: string): void {
    if (typeof key !== "string" || key.trim().length === 0) {
        throw new TypeError("storage key must be a non-empty string");
    }
}

function serializeValue<T>(value: T): string {
    try {
        return JSON.stringify(value);
    } catch {
        throw new TypeError("value could not be serialized");
    }
}

function deserializeValue<T>(value: string): T {
    try {
        return JSON.parse(value) as T;
    } catch {
        return value as T;
    }
}

function set<T>(key: string, value: T): void {
    ensureBrowser();
    validateKey(key);

    const serializedValue = serializeValue(value);

    try {
        window.localStorage.setItem(key, serializedValue);
    } catch {
        throw new Error(`failed to store value for key "${key}"`);
    }
}

function get<T>(key: string): T | null {
    ensureBrowser();
    validateKey(key);

    const value = window.localStorage.getItem(key);

    if (value === null) {
    return null;
    }

    return deserializeValue<T>(value);
}

function has(key: string): boolean {
    ensureBrowser();
    validateKey(key);

    return window.localStorage.getItem(key) !== null;
}

function remove(key: string): void {
    ensureBrowser();
    validateKey(key);

    window.localStorage.removeItem(key);
}

function clear(): void {
    ensureBrowser();

    window.localStorage.clear();
}

export const localStorageKit = {
    set,
    get,
    has,
    delete: remove,
    clear,
} as const;