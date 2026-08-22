import { describe, expect, it } from "vitest";

import { formatDateTime } from "../../../src/formatters/date/formatDateTime.js";

describe("formatDateTime", () => {
    it("formats a date and time using the default options", () => {
        const value = new Date(2026, 0, 15, 14, 30);
        
        const result = formatDateTime(value);

        expect(result).toBe("Jan 15, 2026, 2:30 PM");
    });

    it("uses the provided locale", () => {
        const value = new Date(2026, 0, 15, 14, 30);

        const result = formatDateTime(value, {
            locale: "en-GB",
        });

        expect(result).toBe("15 Jan 2026, 14:30");
    });

    it("uses the provided locale", () => {
        const value = new Date(2026, 0, 15, 14, 30);

        const result = formatDateTime(value, {
            dateStyle: "full",
        });

        expect(result).toBe(
            "Thursday, January 15, 2026 at 2:30 PM",
        );
    });

    it("uses the provided locale", () => {
        const value = new Date(2026, 0, 15, 14, 30, 45);

        const result = formatDateTime(value, {
            timeStyle: "medium",
        });

        expect(result).toBe( "Jan 15, 2026, 2:30:45 PM");
    });

    it("throws a RangeError for an invalid date", () => {
        const value = new Date(NaN);

        expect(() => formatDateTime(value)).toThrow(RangeError);
    });
});