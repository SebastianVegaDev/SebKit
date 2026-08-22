import { describe, expect, it } from "vitest";

import { formatTitleCase } from "../../../src/formatters/string/formatTitleCase.js";

describe("formatTitleCase", () => {
    it("converts every word to title case", () => {
        const result = formatTitleCase(
            "sebastian torres vega",
        );

        expect(result).toBe("Sebastian Torres Vega");
    });

    it("converts uppercase words to title case", () => {
        const result = formatTitleCase(
            "JAVASCRIPT TYPESCRIPT NODE",
        );

        expect(result).toBe("Javascript Typescript Node");
    });

    it("normalizes mixed letter casing", () => {
        const result = formatTitleCase(
            "sEbAsTiAn tOrReS",
        );

        expect(result).toBe("Sebastian Torres");
    });

    it("trims leading and trailing whitespace", () => {
        const result = formatTitleCase(
            "   sebastian torres   ",
        );

        expect(result).toBe("Sebastian Torres");
    });

    it("replaces repeated whitespace with a single space", () => {
        const result = formatTitleCase(
            "sebastian   torres\tvega\njavascript",
        );

        expect(result).toBe(
            "Sebastian Torres Vega Javascript",
        );
    });

    it("preserves punctuation inside words", () => {
        const result = formatTitleCase(
            "javascript: THE GOOD PARTS",
        );

        expect(result).toBe(
            "Javascript: The Good Parts",
        );
    });

    it("returns an empty string for an empty value", () => {
        const result = formatTitleCase("");

        expect(result).toBe("");
    });

    it("returns an empty string for a whitespace-only value", () => {
        const result = formatTitleCase("   \n\t  ");

        expect(result).toBe("");
    });
});