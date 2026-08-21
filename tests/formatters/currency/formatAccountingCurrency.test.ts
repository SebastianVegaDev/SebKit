import { describe, expect, it } from "vitest";

import { formatAccountingCurrency } from "../../../src/formatters/currency/formatAccountingCurrency.js";

describe("formatAccountingCurrency", () => {
    it("formats a positive value using the default options", () => {
        const result = formatAccountingCurrency(1234.5);

        expect(result).toBe("$1,234.50");
    });

    it("formats a negative value using parentheses", () => {
        const result = formatAccountingCurrency(-1234.5);

        expect(result).toBe("($1,234.50)");
    });

    it("formats zero", () => {
        expect(formatAccountingCurrency(0)).toBe("$0.00");
    });

    it("uses the provided currency", () => {
        const result = formatAccountingCurrency(-1234.5, {
            currency: "EUR",
        });

        expect(result).toBe("(€1,234.5)");
    });

    it("uses the provided locale", () => {
        const result = formatAccountingCurrency(-1234.5, {
            locale: "en-GB",
        });

        expect(result).toBe("(US$1,234.50)");
    });
});