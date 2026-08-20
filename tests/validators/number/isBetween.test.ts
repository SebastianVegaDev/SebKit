import { describe, expect, it } from "vitest";

import { isBetween } from "../../../src/validators/number/isBetween.js";

describe("isBetween", () => {
    it("returns true when the value is inside the range", () => {
        expect(isBetween(5, 1, 10)).toBe(true);
    });

    it("returns true when the value equals the minimum", () => {
        expect(isBetween(1, 1, 10)).toBe(true);
    });

    it("returns true when the value equals the maximum", () => {
        expect(isBetween(10, 1, 10)).toBe(true);
    });

    it("returns false when the value is below the minimum", () => {
        expect(isBetween(0, 1, 10)).toBe(false);
    });

    it("returns false when the value is above the maximum", () => {
        expect(isBetween(11, 1, 10)).toBe(false);
    });

    it("works with negative ranges", () => {
        expect(isBetween(-5, -10, -1)).toBe(true);
    });

    it("works with decimal values", () => {
        expect(isBetween(1.5, 1, 2)).toBe(true);
    });

    it("returns false for NaN", () => {
        expect(
            isBetween(Number.NaN, 0, 10),
        ).toBe(false);
    });

    it("returns false when min is greater than max", () => {
        expect(isBetween(5, 10, 1)).toBe(false);
    });

    it("returns false for non-number values", () => {
        expect(isBetween("5", 1, 10)).toBe(false);
        expect(isBetween(null, 1, 10)).toBe(false);
        expect(isBetween(undefined, 1, 10)).toBe(false);
        expect(isBetween({}, 1, 10)).toBe(false);
    });
});