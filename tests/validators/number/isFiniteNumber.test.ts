import { describe, expect, it } from "vitest";

import { isFiniteNumber } from "../../../src/validators/number/isFiniteNumber.js";

describe("isFiniteNumber", () => {
    it.each([
        0,
        -0,
        1,
        -1,
        3.14,
        -3.14,
    ])(
        "returns true for finite number: %s",
        (value) => {
            expect(isFiniteNumber(value)).toBe(true);
        }
    );

    it.each([
        Number.NaN,
        Infinity,
        -Infinity,
    ])(
        "returns false for non-finite number: %s",
        (value) => {
            expect(isFiniteNumber(value)).toBe(false);
        }
    );

    it("returns false for non-number value", () => {
        expect(isFiniteNumber("123")).toBe(false);
        expect(isFiniteNumber(null)).toBe(false);
        expect(isFiniteNumber(undefined)).toBe(false);
        expect(isFiniteNumber(true)).toBe(false);
        expect(isFiniteNumber({})).toBe(false);
    });
});