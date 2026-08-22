import { describe, expect, it } from "vitest";

import { formatCompactCurrency } from "../../../src/formatters/currency/formatCompactCurrency.js";

describe("formatCompactCurrency", () => {
    it("formats thousands using compact notation", () => {
        const result = formatCompactCurrency(1200);

        expect(result).toBe("$1.2K");
    });

    it("formats millions using compact notation", () => {
        const result = formatCompactCurrency(1_500_000);

        expect(result).toBe("$1.5M");
    });

    it("does not abbreviate values below one thousand", () => {
        const result = formatCompactCurrency(999);

        expect(result).toBe("$999");
    });

    it("formats negative values", () => {
        const result = formatCompactCurrency(-1200);

        expect(result).toBe("-$1.2K");
    });

    it("uses the provided currency", () => {
        const result = formatCompactCurrency(1200, {
            currency: "EUR",
        });

        expect(result).toBe("€1.2K");
    });

    it("uses the provided locale", () => {
        const result = formatCompactCurrency(1200, {
            locale: "en-GB",
        });

        expect(result).toBe("US$1.2k");
    });
});