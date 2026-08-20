import { describe, expect, it } from "vitest";

import { isEven } from "../../../src/validators/number/isEven.js";

describe("isEven", () => {
    it.each([
        0,
        -0,
        2,
        -2,
        100,
        -100,
    ])("returns true for even integer %s", (value) => {
        expect(isEven(value)).toBe(true);
    });

    it.each([
        1,
        -1,
        3,
        -3,
        2.5,
        Number.NaN,
        Infinity,
        -Infinity,
    ])("returns false for non-even number %s", (value) => {
        expect(isEven(value)).toBe(false);
    });

    it("returns false for non-number values", () => {
        expect(isEven("2")).toBe(false);
        expect(isEven(null)).toBe(false);
        expect(isEven(undefined)).toBe(false);
        expect(isEven({})).toBe(false);
    });
});