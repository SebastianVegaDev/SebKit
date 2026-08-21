import { describe, expect, it } from "vitest";

import { formatCurrency } from "../../../src/formatters/currency/formatCurrency.js";

describe("formatCurrency", () => {
    it("format a positive value using the default options", () => {
        expect(formatCurrency(1234.5)).toBe("$1,234.50");
    });

    it("formats a negative value", () => {
        expect(formatCurrency(-1234.5)).toBe("-$1,234.50");
    });

    it("formats zero", () => {
        expect(formatCurrency(0)).toBe("$0.00");
    });

    it("uses the proivded currency", () => {
        const result = formatCurrency(1234.5, {
            currency: "EUR",
        });

        expect(result).toBe("€1,234.50");
    });

    it("uses the provided locale", () => {
        const result = formatCurrency(1234.5, {
            locale: "en-GB",
        });

        expect(result).toBe("US$1,234.50")
    });

    it("uses the provided locale and currency together", () => {
        const result = formatCurrency(1234.5, {
            locale: "en-GB",
            currency: "GBP",
        });

        expect(result).toBe("£1,234.50");
    });
});