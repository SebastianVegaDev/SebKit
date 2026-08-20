import { describe, expect, it } from "vitest";

import { hasMinLength } from "../../../src/validators/string/hasMinLength.js";

describe("hasMinLength", () => {
    it("returns true when the string length equals the minimum length", () => {
        expect(hasMinLength("hello", 5)).toBe(true);
    });

    it("returns true when the string length exceeds the minimum length", () => {
        expect(hasMinLength("hello", 3)).toBe(true);
    });

    it("returns false when the string length is below the minimum length", () => {
        expect(hasMinLength("hello", 6)).toBe(false);
    });

    it("support zero as a valid minimum length", () => {
        expect(hasMinLength("", 0)).toBe(true);
        expect(hasMinLength("a", 0)).toBe(false);
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
            expect(hasMinLength(value, 5)).toBe(false);
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
        "returns false for invalid minimum length: %s",
        (minLength) => {
            expect(hasMinLength("hello", minLength)).toBe(false);
        }
    );
});