import { describe, expect, it } from "vitest";

import { isWeekend } from "../../../src/validators/date/isWeekend.js";

describe("isLeapYear", () => {
    it("returns true for Saturday", () => {
        const saturday = new Date(2026, 7, 15);

        expect(isWeekend(saturday)).toBe(true);
    });

    it("returns true for Sunday", () => {
        const sunday = new Date(2026, 7, 16);

        expect(isWeekend(sunday)).toBe(true);
    });
    
    it("returns false for a weekday", () => {
        const monday = new Date(2026, 7, 17);

        expect(isWeekend(monday)).toBe(false);
    });

    it("returns false for non-Date values", () => {
        expect(isWeekend("2026-08-15")).toBe(false);
        expect(isWeekend(null)).toBe(false);
        expect(isWeekend(undefined)).toBe(false);
    }); 
});