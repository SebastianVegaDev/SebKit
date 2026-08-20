import { describe, expect, it } from "vitest";

import { isInteger } from "../../../src/validators/number/isInteger.js";

describe("isInteger", () => {
    it.each([
        0,
        -0,
        1,
        -1,
        42,
        -42,
        2.0,
    ])(
        "returns true for integer: %s",
        (value) => {
            expect(isInteger(value)).toBe(true);
        }
    );

    it.each([
        1.5,
        -1.5,
        0.1,
        NaN,
        Infinity,
        -Infinity,
    ])("returns false for non-integer number %s", (value) => {
        expect(isInteger(value)).toBe(false);
    });

    it("returns false for non-number values", () => {
        expect(isInteger("1")).toBe(false);
        expect(isInteger(null)).toBe(false);
        expect(isInteger(undefined)).toBe(false);
        expect(isInteger(true)).toBe(false);
        expect(isInteger({})).toBe(false);
    });
});