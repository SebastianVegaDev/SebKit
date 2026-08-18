import { describe, expect, it } from "vitest";
import { hasLength } from "../../../src/validators/array/hasLength.js";

describe("hasLength", () => {
    it("returns true when the arrays has the expected length", () => {
        const values = ["a", "b", "c"];

        expect(hasLength(values, 3)).toBe(true);
    });

    it("returns false when the array does not have the expected length", () => {
        const values = ["a", "b", "c"];

        expect(hasLength(values, 2)).toBe(false);
    });

    it("return when checking an empty array against zero", () => {
        expect(hasLength([], 0)).toBe(true);
    });

    it.each([
        -1,
        1.5,
        NaN,
        Infinity,
        -Infinity,
    ])(
        "returns false when expectedLength is invalid: %s",
        (expecttedLength) => {
            expect(hasLength([1, 2, 3], expecttedLength)).toBe(false);
        }
    );
});