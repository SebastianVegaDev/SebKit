import { describe, expect, it } from "vitest";

import { formatNumber } from "../../../src/formatters/number/formatNumber.js";

describe("formatNumber", () => {
    it("formats a number using the default options", () => {
        const result = formatNumber(1_234_567.891);

        expect(result).toBe("1,234,567.89");
    });

    it("does not add decimals to an integer by default", () => {
        const result = formatNumber(1_234);

        expect(result).toBe("1,234");
    });

    it("formats negative values", () => {
        const result = formatNumber(-1_234.5);

        expect(result).toBe("-1,234.5");
    });

    it("formats zero", () => {
        const result = formatNumber(0);

        expect(result).toBe("0");
    });

    it("uses the provided locale", () => {
        const result = formatNumber(1_234.5, {
            locale: "de-DE",
        });

        expect(result).toBe("1.234,5");
    });

    it("uses the provided minimum fraction digits", () => {
        const result = formatNumber(12, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

        expect(result).toBe("12.00");
    });

    it("uses the provided maximum fraction digits", () => {
        const result = formatNumber(12.36, {
            maximumFractionDigits: 1,
        });

        expect(result).toBe("12.4");
    });

    it("rounds values according to maximumFractionDigits", () => {
        const result = formatNumber(12.3456, {
            maximumFractionDigits: 2,
        });

        expect(result).toBe("12.35");
    });

    it("propagates a RangeError for negative fraction digits", () => {
        expect(() => {
            formatNumber(12.5, {
                minimumFractionDigits: -1,
            });
        }).toThrow(RangeError);
    });

    it("throws when minimumFractionDigits exceeds maximumFractionDigits", () => {
        expect(() => {
            formatNumber(12.5, {
                minimumFractionDigits: 3,
                maximumFractionDigits: 2,
            });
        }).toThrow(RangeError);
    });
});
