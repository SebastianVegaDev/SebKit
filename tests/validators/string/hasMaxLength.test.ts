import { describe, expect, it } from "vitest";

import { hasMaxLength } from "../../../src/validators/string/hasMaxLength.js";

describe("hasMaxLength", () => {
    it("returns true when the string length equals the maximum length", () => {
        expect(hasMaxLength("hello", 5)).toBe(true);
    });

    it("returns true when the string length is below the maximum length", () => {
        expect(hasMaxLength("hello", 10)).toBe(true);
    });

    it("returns false when the string length exceeds the maximum length", () => {
        expect(hasMaxLength("hello", 4)).toBe(false);
    });

    it("support zero as a valid maximum length", () => {
        expect(hasMaxLength("", 0)).toBe(true);
        expect(hasMaxLength("a", 0)).toBe(false);
    });

    it.each([
        123,
        null,
        undefined,
        [],
        {},
        true,
    ])(
        "returns false for non-string value: %s",
        (value) => {
            expect(hasMaxLength(value, 5)).toBe(false);
        }
    );

    it.each([
        -1,
        1.5,
        NaN,
        Infinity,
        -Infinity,
        "5",
        null,
        undefined,
        {},
        [],
    ])(
        "returns false for invalid maximum length: %s",
        (maxLength) => {
            expect(hasMaxLength("hello", maxLength)).toBe(false);
        }
    );
});