import { describe, expect, it } from "vitest";

import { isPositive } from "../../../src/validators/number/isPositive.js";

describe("isPositive", () => {
    it.each([
        1,
        0.1,
        100,
        Infinity,
    ])(
        "returns true for positive number %s", 
        (value) => {
            expect(isPositive(value)).toBe(true);
        }
    );

    it.each([
        0,
        -0,
        -1,
        -0.1,
        -Infinity,
        Number.NaN,
    ])(
        "returns false for non-positive number %s", 
        (value) => {
            expect(isPositive(value)).toBe(false);
        }
    );

    it("returns false for non-number values", () => {
        expect(isPositive("1")).toBe(false);
        expect(isPositive(null)).toBe(false);
        expect(isPositive(undefined)).toBe(false);
        expect(isPositive({})).toBe(false);
    });
});