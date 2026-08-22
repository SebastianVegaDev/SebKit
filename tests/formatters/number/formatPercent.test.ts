import { describe, expect, it } from "vitest";

import { formatPercent } from "../../../src/formatters/number/formatPercent.js";

describe("formatPercent", () => {
    it("formats a decimal value as a percentage", () => {
        const result = formatPercent(0.25);

        expect(result).toBe("25%");
    });

    it("formats one as one hundred percent", () => {
        const result = formatPercent(1);

        expect(result).toBe("100%");
    });

    it("formats zero", () => {
        const result = formatPercent(0);

        expect(result).toBe("0%");
    });

    it("formats negative percentages", () => {
        const result = formatPercent(-0.25);

        expect(result).toBe("-25%");
    });

    it("rounds using the default maximum fraction digits", () => {
        const result = formatPercent(0.12345);

        expect(result).toBe("12.35%");
    });

    it("uses the provided minimum fraction digits", () => {
        const result = formatPercent(0.25, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

        expect(result).toBe("25.00%");
    });

    it("uses the provided maximum fraction digits", () => {
        const result = formatPercent(0.12345, {
            maximumFractionDigits: 1,
        });

        expect(result).toBe("12.3%");
    });

    it("uses the provided locale", () => {
        const result = formatPercent(0.25, {
            locale: "de-DE",
        });

        expect(result).toBe("25\u00A0%");
    });

    it("propagates a RangeError for negative fraction digits", () => {
        expect(() => {
            formatPercent(0.25, {
                maximumFractionDigits: -1,
            });
        }).toThrow(RangeError);
    });

    it("throws when minimumFractionDigits exceeds maximumFractionDigits", () => {
        expect(() => {
            formatPercent(0.25, {
                minimumFractionDigits: 3,
                maximumFractionDigits: 2,
            });
        }).toThrow(RangeError);
    });
});
