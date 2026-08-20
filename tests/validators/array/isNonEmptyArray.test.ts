import { describe, expect, it } from "vitest";

import { isNonEmptyArray } from "../../../src/validators/array/isNonEmptyArray.js";

describe("isNonEmptyArray", () => {
    it("returns true for an array  with one element", () => {
        expect(isNonEmptyArray([1])).toBe(true);
    });

    it("returns true for an array with multiple elements", () => {
        expect(isNonEmptyArray([1, 2, 3])).toBe(true);
    });

    it("returns false for an empty array", () => {
        expect(isNonEmptyArray([])).toBe(false);
    });

    it.each([
        {},
        "typescript",
        123,
        true,
        null,
        undefined
    ])(
        "return false for a non-array value: %s",
        (value) => {
            expect(isNonEmptyArray(value)).toBe(false);
        }
    );
});