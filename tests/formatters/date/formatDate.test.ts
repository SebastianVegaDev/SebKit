import { describe, expect, it } from "vitest";

import { formatDate } from "../../../src/formatters/date/formatDate.js";

describe("formatDate", () => {
    it("formats a date using the default options", () => {
        const value = new Date(2026, 0, 15);

        const result = formatDate(value);

        expect(result).toBe("Jan 15, 2026");
    });

    it("uses the provided locale", () => {
        const value = new Date(2026, 0, 15);

        const result = formatDate(value, {
            locale: "en-GB",
        });

        expect(result).toBe("15 Jan 2026");
    });

    it("uses the provided date style", () => {
        const value = new Date(2026, 0, 15);

        const result = formatDate(value, {
            dateStyle: "full",
        });

        expect(result).toBe("Thursday, January 15, 2025");
    });

    it("throws a ReferenceError for an invalid date", () => {
        const value = new Date(NaN);

        expect(() => formatDate(value)).toThrow(RangeError);
    });
});