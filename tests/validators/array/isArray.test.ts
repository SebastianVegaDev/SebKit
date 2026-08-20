import { describe, expect, it } from "vitest";
import { isArray } from "../../../src/validators/array/isArray.js";

describe("isArray", () => {
    it("returns true for an empty array", () => {
        expect(isArray([])).toBe(true);
    });

    it("returns true for a non-empty array", () => {
        expect(isArray([1, 2, 3])).toBe(true);
    });

    it("returns true for an array containing different value types", () => {
        expect(isArray([1, "typescript", true, null])).toBe(true);
    });

    it.each([
        {},
        "array",
        123,
        true,
        null,
        undefined,
        new Set(),
    ])(
        "return false for a non-array value: %s",
        (value) => {
            expect(isArray(value)).toBe(false);
        }
    );
});