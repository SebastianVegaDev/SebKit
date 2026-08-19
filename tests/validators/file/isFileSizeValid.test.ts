import { describe, expect, it } from "vitest";

import { isFileSizeValid } from "../../../src/validators/file/isFileSizeValid.js";

describe("isFileSizeValid", () => {
    it("returns true when the file size is below the maximum", () => {
        expect(isFileSizeValid(500, 1000)).toBe(true);
    });
    
    it("returns true when the file size is exactly the maximum", () => {
        expect(isFileSizeValid(1000, 1000)).toBe(true);
    });

    it("returns true for a zero-byte file", () => {
        expect(isFileSizeValid(0, 1000)).toBe(true);
    });

    it("returns false when the file size exceeds the maximum", () => {
        expect(isFileSizeValid(1001, 1000)).toBe(false);
    });

    it("returns false for negative file sizes", () => {
        expect(isFileSizeValid(-1, 1000)).toBe(false);
    });

    it("returns false for NaN", () => {
        expect(isFileSizeValid(NaN, 1000)).toBe(false);
    });

    it("returns false for Infinity", () => {
        expect(isFileSizeValid(Infinity, 1000)).toBe(false);
    });

    it("returns false for negative Infinity", () => {
        expect(isFileSizeValid(-Infinity, 1000)).toBe(false);
    });

    it("returns false for non-number values", () => {
        expect(isFileSizeValid("500", 1000)).toBe(false);
        expect(isFileSizeValid(null, 1000)).toBe(false);
        expect(isFileSizeValid(undefined, 1000)).toBe(false);
        expect(isFileSizeValid({}, 1000)).toBe(false);
    });
});