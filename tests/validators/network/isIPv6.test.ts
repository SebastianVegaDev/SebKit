import { describe, expect, it } from "vitest";

import { isIPv6 } from "../../../src/validators/network/isIPv6.js";

describe("isIPv6", () => {
    it.each([
        "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
        "2001:db8::1",
        "::1",
        "::",
        "fe80::",
        "2001:db8:0:0:0:0:2:1",
    ])("returns true for valid IPv6 address %s", (value) => {
        expect(isIPv6(value)).toBe(true);
    });

    it.each([
        "1:2",
        "12345:abcd",
        "2001:db8:::1",
        "2001:db8::1::1",
        "2001:db8:85a3:0:0:8a2e:370:7334:1234",
        "2001:db8:85a3::8a2e:370g:7334",
        "gggg::1",
        "192.168.1.1",
        "",
    ])("returns false for invalid IPv6 address %s", (value) => {
        expect(isIPv6(value)).toBe(false);
    });

    it("returns false for non-string values", () => {
        expect(isIPv6(null)).toBe(false);
        expect(isIPv6(undefined)).toBe(false);
        expect(isIPv6(123)).toBe(false);
        expect(isIPv6({})).toBe(false);
    });
});