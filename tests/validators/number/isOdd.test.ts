import { describe, expect, it } from "vitest";

import { isOdd } from "../../../src/validators/number/isOdd.js";

describe("isOdd", () => {
    it.each([
        1,
        -1,
        3,
        -3,
        101,
        -101,
    ])("returns true for odd integer %s", (value) => {
        expect(isOdd(value)).toBe(true);
    });

    it.each([
        0,
        -0,
        2,
        -2,
        100,
        2.5,
        Number.NaN,
        Infinity,
        -Infinity,
    ])("returns false for non-odd number %s", (value) => {
        expect(isOdd(value)).toBe(false);
    });

    it("returns false for non-number values", () => {
        expect(isOdd("3")).toBe(false);
        expect(isOdd(null)).toBe(false);
        expect(isOdd(undefined)).toBe(false);
        expect(isOdd({})).toBe(false);
    });
});