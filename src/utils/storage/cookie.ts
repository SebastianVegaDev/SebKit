export type SameSite = "Strict" | "Lax" | "None";

export interface CookieOptions {
    path?: string;
    domain?: string;
    maxAge?: number;
    expires?: Date;
    secure?: boolean;
    sameSite?: SameSite;
}

function ensureBrowser(): void {
    if (typeof document === "undefined") {
        throw new Error("cokkie utilities are only available in browser environments");
    }
}

function validateName(name: string): void {
    if (typeof name !== "string" || name.trim().length === 0) {
        throw new TypeError("cookie name must be a non empty string");
    }
}

function validateOptions(options: CookieOptions): void {
    if (options.maxAge !== undefined) {
        if (!Number.isInteger(options.maxAge) || options.maxAge < 0) {
            throw new RangeError("maxAge must be a non-negative integer");
        }
    }

    if (options.expires !== undefined) {
        if (
            !(options.expires instanceof Date) ||
            Number.isNaN(options.expires.getTime)
        ) {
            throw new TypeError("expires must be a valid Date");
        }
    }

    if (options.sameSite === "None" &&  options.secure !== true) {
        throw new Error(`SameSite="None" requires secure=true`);
    }
}

function set(
    name: string,
    value: string,
    options: CookieOptions = {},
): void {
    ensureBrowser();
    validateName(name)
    validateOptions(options);

    const encodedName = encodeURIComponent(name);
    const encodedValue = encodeURIComponent(value);

    const parts: string[] = [`${encodedName}=${encodedValue}`];

    if (options.path !== undefined) {
        parts.push(`Path=${options.path}`);
    }

    if (options.domain !== undefined) {
        parts.push(`Domain=${options.domain}`);
    }

    if (options.maxAge !== undefined) {
        parts.push(`Max-Age=${options.maxAge}`);
    }

    if (options.expires !== undefined) {
        parts.push(`Expires=${options.expires.toUTCString()}`);
    }

    if (options.secure !== undefined) {
        parts.push("Secure");
    }

    if (options.sameSite !== undefined) {
        parts.push(`SameSite=${options.sameSite}`);
    }

    document.cookie = parts.join("; ");
}

function get(name: string): string | null {
    ensureBrowser();
    validateName(name);

    const encodedName = encodeURIComponent(name);

    const cookies = document.cookie
        .split(";")
        .map((cookie) => cookie.trim());

    const cookie = cookies.find((cookie) => cookie.startsWith(`${encodedName}=`));

    if (cookie === undefined) {
        return null;
    }

    const encodedValue = cookie.slice(encodedName.length + 1);

    return decodeURIComponent(encodedValue);
}

function has(name: string): boolean {
    return get(name) !== null;
}

function remove(
    name: string,
    options: Pick<CookieOptions, "path" | "domain"> = {},
): void {
    ensureBrowser();
    validateName(name);

    set(name, "", {
        ...options,
        expires: new Date(0),
        maxAge: 0,
    });
}

export const cookie = {
    set,
    get,
    has,
    delete: remove,
} as const;
