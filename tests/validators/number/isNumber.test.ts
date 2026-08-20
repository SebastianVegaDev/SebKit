import { describe, expect, it } from "vitest";

import { isNumber } from "../../../src/validators/number/isNumber.js";

describe("isNumber", () => {
    it.each([
        0,
        -0,
        1,
        -1,
        3.14,
        -3.14,
        Infinity,
        -Infinity,
    ])(
        "returns true for number: %s",
        (value) => {
            expect(isNumber(value)).toBe(value);
        }
    );

    it("returns false for NaN", () => {
        expect(isNumber(NaN)).toBe(false);
    });

    it("returns false for numeric strings", () => {
        expect(isNumber("123")).toBe(false);
    });

    it("returns false for non-number values", () => {
        expect(isNumber(null)).toBe(false);
        expect(isNumber(undefined)).toBe(false);
        expect(isNumber(true)).toBe(false);
        expect(isNumber({})).toBe(false);
        expect(isNumber([])).toBe(false);
        expect(isNumber(1n)).toBe(false);
    });
});