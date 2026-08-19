import { describe, expect, it } from "vitest";

import { isDomain } from "../../../src/validators/network/isDomain.js";

describe("isDomain", () => {
    it("returns true for a valid domain", () => {
        expect(isDomain("example.com")).toBe(true);
    });

    it("returns true for a domain with subdomains", () => {
        expect(isDomain("api.example.com")).toBe(true);
    });

    it("returns true for a domain with multiple levels", () => {
        expect(isDomain("app.api.example.co.uk")).toBe(true);
    });

    it("returns true when a label contains a hyphen", () => {
        expect(isDomain("my-siten.com")).toBe(true);
    });

    it("returns false when a label starts with a hyphen", () => {
        expect(isDomain("-example.com")).toBe(false);
    });

    it("returns false when a label ends with a hyphen", () => {
        expect(isDomain("example-.com")).toBe(false);
    });

    it("returns false when the top-level domain has only one character", () => {
        expect(isDomain("example.c")).toBe(false);
    });

    it("returns false for localhost", () => {
        expect(isDomain("localhost")).toBe(false);
    });

    it("returns false for an IPv4 address", () => {
        expect(isDomain("192.168.1.1")).toBe(false);
    });

    it("returns false for an empty string", () => {
        expect(isDomain("")).toBe(false);
    });

    it("returns false for non-string values", () => {
        expect(isDomain(null)).toBe(false);
        expect(isDomain(undefined)).toBe(false);
        expect(isDomain(123)).toBe(false);
        expect(isDomain({})).toBe(false);
    });
});