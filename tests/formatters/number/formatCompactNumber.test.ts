import { describe, expect, it } from "vitest";

import { formatCompactNumber } from "../../../src/formatters/number/formatCompactNumber.js";

describe("formatCompactNumber", () => {
    it("does not abbreviate values below one thousand", () => {
        const result = formatCompactNumber(999);

        expect(result).toBe("999");
    });

    it("formats thousands using compact notation", () => {
        const result = formatCompactNumber(1_200);

        expect(result).toBe("1.2K");
    });

    it("formats millions using compact notation", () => {
        const result = formatCompactNumber(1_500_000);

        expect(result).toBe("1.5M");
    });

    it("formats negative values", () => {
        const result = formatCompactNumber(-1_200);

        expect(result).toBe("-1.2K");
    });

    it("formats zero", () => {
        const result = formatCompactNumber(0);

        expect(result).toBe("0");
    });

    it('uses the "long" compact display', () => {
        const result = formatCompactNumber(1_200, {
            compactDisplay: "long",
        });

        expect(result).toBe("1.2 thousand");
    });

    it("uses the provided locale", () => {
        const result = formatCompactNumber(1_200, {
            locale: "en-GB",
        });

        expect(result).toBe("1.2k");
    });
});
