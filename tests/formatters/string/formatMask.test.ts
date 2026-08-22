import { describe, expect, it } from "vitest";

import { formatMask } from "../../../src/formatters/string/formatMask.js";

describe("formatMask", () => {
    it("replaces placeholders using the value characters", () => {
        const result = formatMask(
            "123456789",
            "###-###-###",
        );

        expect(result).toBe("123-456-789");
    });

    it("preserves literal mask characters", () => {
        const result = formatMask(
            "123456789",
            "(###) ###-###",
        );

        expect(result).toBe("(123) 456-789");
    });

    it("stops formatting when the value runs out of characters", () => {
        const result = formatMask(
            "12345",
            "(###) ###-####",
        );

        expect(result).toBe("(123) 45");
    });

    it("ignores extra value characters when the mask is full", () => {
        const result = formatMask(
            "123456789",
            "###-###",
        );

        expect(result).toBe("123-456");
    });

    it("uses the provided placeholder", () => {
        const result = formatMask(
            "1234",
            "XX-XX",
            {
                placeholder: "X",
            },
        );

        expect(result).toBe("12-34");
    });

    it("returns the mask when it has no placeholders", () => {
        const result = formatMask(
            "123",
            "SebKit",
        );

        expect(result).toBe("SebKit");
    });

    it("returns an empty string for an empty mask", () => {
        const result = formatMask("123", "");

        expect(result).toBe("");
    });

    it("returns an empty string when both value and mask are empty", () => {
        const result = formatMask("", "");

        expect(result).toBe("");
    });

    it.each([
        "",
        "##",
        "ABC",
    ])(
        'throws a RangeError for invalid placeholder "%s"',
        (placeholder) => {
            expect(() => {
                formatMask("123", "###", {
                    placeholder,
                });
            }).toThrow(RangeError);
        },
    );

    it("throws a descriptive error for an invalid placeholder", () => {
        expect(() => {
            formatMask("123", "###", {
                placeholder: "",
            });
        }).toThrow(
            "placeholder must contain exactly one character",
        );
    });
});