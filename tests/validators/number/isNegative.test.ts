import { describe, expect, it } from "vitest";

import { isNegative } from "../../../src/validators/number/isNegative.js";

describe("isNegative", () => {
    it.each([
        -1,
        -0.1,
        -100,
        -Infinity,
    ])(
        "returns true for negative number %s", 
        (value) => {
            expect(isNegative(value)).toBe(true);
        }
    );

    it.each([
        0,
        -0,
        1,
        0.1,
        Infinity,
        Number.NaN,
    ])(
        "returns false for non-negative number %s", 
        (value) => {
            expect(isNegative(value)).toBe(false);
        }
    );

    it("returns false for non-number values", () => {
        expect(isNegative("-1")).toBe(false);
        expect(isNegative(null)).toBe(false);
        expect(isNegative(undefined)).toBe(false);
        expect(isNegative({})).toBe(false);
    });
});