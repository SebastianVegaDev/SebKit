import { describe, expect, it } from "vitest";

import { isIPv4 } from "../../../src/validators/network/isIPv4.js";

describe("isIPv4", () => {
    it.each([
        "192.168.1.1",
        "0.0.0.0",
        "255.255.255.255",
        "8.8.8.8",
    ])("returns true for valid IPv4 address %s", (value) => {
        expect(isIPv4(value)).toBe(true);
    });

    it.each([
        "256.168.1.1",
        "192.168.1",
        "192.168.1.1.5",
        "192.168.-1.1",
        "192.168.001.1",
        "192.abc.1.1",
        "2001:db8::1",
        "",
    ])("returns false for invalid IPv4 address %s", (value) => {
        expect(isIPv4(value)).toBe(false);
    });

    it("returns false for non-string values", () => {
        expect(isIPv4(null)).toBe(false);
        expect(isIPv4(undefined)).toBe(false);
        expect(isIPv4(123)).toBe(false);
        expect(isIPv4({})).toBe(false);
    });
});