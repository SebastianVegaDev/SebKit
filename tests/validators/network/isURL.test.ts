import { describe, expect, it } from "vitest";

import { isUrl } from "../../../src/validators/network/isURL.js";

describe("isUrl", () => {
    it("returns true for a valid HTTPS URL", () => {
        expect(
            isUrl("https://example.com"),
        ).toBe(true);
    });

    it("returns true for a valid HTTP URL", () => {
        expect(
            isUrl("http://example.com"),
        ).toBe(true);
    });

    it("returns true for a URL with path, query and hash", () => {
        expect(
            isUrl(
                "https://example.com/users?page=2#profile",
            ),
        ).toBe(true);
    });

    it("returns true for a URL with a port", () => {
        expect(
            isUrl("http://localhost:3000"),
        ).toBe(true);
    });

    it("returns true for another valid absolute URL scheme", () => {
        expect(
            isUrl("ftp://example.com/file.txt"),
        ).toBe(true);
    });

    it("returns false when the protocol is missing", () => {
        expect(
            isUrl("example.com"),
        ).toBe(false);
    });

    it("returns false for a relative URL", () => {
        expect(
            isUrl("/users/profile"),
        ).toBe(false);
    });

    it("returns false for malformed URLs", () => {
        expect(
            isUrl("https://"),
        ).toBe(false);
    });

    it("returns false for an empty string", () => {
        expect(isUrl("")).toBe(false);
    });

    it("returns false for non-string values", () => {
        expect(isUrl(null)).toBe(false);
        expect(isUrl(undefined)).toBe(false);
        expect(isUrl(123)).toBe(false);
        expect(isUrl({})).toBe(false);
    });
});