import { describe, expect, it } from "vitest";

import { isFloat } from "../../../src/validators/number/isFloat.js"

describe("isFloat", () => {
    it.each([
        1.5,
        -1.5,
        0.1,
        -0.1,
        3.14159,
    ])(
        "returns true for float: %s",
        (value) => {
            expect(isFloat(value)).toBe(true);
        }
    );

    it.each([
        0,
        -0,
        1,
        -1,
        2.0,
    ])(
        "returns false for integer: %s",
        (value) => {
            expect(isFloat(value)).toBe(false);
        }
    );

    it.each([
        NaN,
        Infinity,
        -Infinity,
    ])(
        "returns false for non-finite number: %s",
        (value) => {
            expect(isFloat(value)).toBe(false);
        } 
    );

    it("returns false for non-number valuesL", () => {
        expect(isFloat("1.5")).toBe(false);
        expect(isFloat(null)).toBe(false);
        expect(isFloat(undefined)).toBe(false);
        expect(isFloat({})).toBe(false);
    });
});