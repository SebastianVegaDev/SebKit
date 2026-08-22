import { describe, expect, it } from "vitest";

import { formatOrdinal } from "../../../src/formatters/number/formatOrdinal.js";

describe("formatOrdinal", () => {
    it.each([
        [1, "1st"],
        [2, "2nd"],
        [3, "3rd"],
        [4, "4th"],
        [5, "5th"],
        [10, "10th"],
    ])("formats %s as %s", (value, expected) => {
        expect(formatOrdinal(value)).toBe(expected);
    });

    it.each([
        [11, "11th"],
        [12, "12th"],
        [13, "13th"],
        [111, "111th"],
        [112, "112th"],
        [113, "113th"],
    ])("uses the th suffix for special value %s", (value, expected) => {
        expect(formatOrdinal(value)).toBe(expected);
    });

    it.each([
        [21, "21st"],
        [22, "22nd"],
        [23, "23rd"],
        [24, "24th"],
        [121, "121st"],
        [122, "122nd"],
        [123, "123rd"],
    ])("uses the suffix of the last digit for %s", (value, expected) => {
        expect(formatOrdinal(value)).toBe(expected);
    });

    it("formats zero", () => {
        const result = formatOrdinal(0);

        expect(result).toBe("0th");
    });

    it.each([
        [-1, "-1st"],
        [-2, "-2nd"],
        [-3, "-3rd"],
        [-11, "-11th"],
        [-12, "-12th"],
        [-13, "-13th"],
    ])("formats negative integer %s as %s", (value, expected) => {
        expect(formatOrdinal(value)).toBe(expected);
    });

    it.each([1.5, -1.5, Number.NaN, Infinity, -Infinity])(
        "throws a RangeError for non-integer value %s",
        (value) => {
            expect(() => formatOrdinal(value)).toThrow(RangeError);
        },
    );

    it("throws a descriptive error for a non-integer value", () => {
        expect(() => formatOrdinal(1.5)).toThrow("value must be an integer");
    });
});
