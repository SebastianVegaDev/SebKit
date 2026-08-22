import { describe, expect, it } from "vitest";

import { formatInitials } from "../../../src/formatters/string/formatInitials.js";

describe("formatInitials", () => {
    it("returns the initials of every word", () => {
        const result = formatInitials(
            "Sebastian Torres Vega",
        );

        expect(result).toBe("STV");
    });

    it("converts lowercase initials to uppercase", () => {
        const result = formatInitials(
            "sebastian torres vega",
        );

        expect(result).toBe("STV");
    });

    it("trims the value and handles repeated whitespace", () => {
        const result = formatInitials(
            "  Sebastian   Torres\nVega  ",
        );

        expect(result).toBe("STV");
    });

    it("limits the number of initials", () => {
        const result = formatInitials(
            "Sebastian Fabricio Torres Vega",
            {
                maxInitials: 2,
            },
        );

        expect(result).toBe("SF");
    });

    it("returns all initials when maxInitials exceeds the word count", () => {
        const result = formatInitials(
            "Sebastian Torres",
            {
                maxInitials: 5,
            },
        );

        expect(result).toBe("ST");
    });

    it("joins initials using the provided separator", () => {
        const result = formatInitials(
            "Sebastian Torres Vega",
            {
                separator: ".",
            },
        );

        expect(result).toBe("S.T.V");
    });

    it("combines maxInitials and separator options", () => {
        const result = formatInitials(
            "Sebastian Fabricio Torres Vega",
            {
                maxInitials: 2,
                separator: "-",
            },
        );

        expect(result).toBe("S-F");
    });

    it("returns an empty string for an empty value", () => {
        expect(formatInitials("")).toBe("");
    });

    it("returns an empty string for a whitespace-only value", () => {
        expect(formatInitials("   \n\t  ")).toBe("");
    });

    it.each([
        0,
        -1,
        1.5,
        Number.NaN,
        Infinity,
        -Infinity,
    ])("throws a RangeError for invalid maxInitials %s", (maxInitials) => {
        expect(() => {
            formatInitials("Sebastian Torres", {
                maxInitials,
            });
        }).toThrow(RangeError);
    });

    it("throws a descriptive error for invalid maxInitials", () => {
        expect(() => {
            formatInitials("Sebastian Torres", {
                maxInitials: 0,
            });
        }).toThrow(
            "maxInitials must be a positive integer",
        );
    });
});