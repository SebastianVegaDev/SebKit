import { describe, expect, it } from "vitest";

import { isDate } from "../../../src/validators/date/isDate.js";

describe("describe", () => {
    it("returns true for a valid date", () => {
        expect(isDate(new Date())).toBe(true);
    });

    it("returns false for an invalid date", () => {
        expect(isDate(new Date("invalid"))).toBe(false);
    });

    it("returns false for a date string", () => {
        expect(isDate("2026-08-18")).toBe(false);
    });

    it("returns false for a timestamp", () => {
        expect(isDate(Date.now())).toBe(false);
    });

    it("returns false for null", () => {
        expect(isDate(null)).toBe(false);
    });

    it("returns false for undefined", () => {
        expect(isDate(undefined)).toBe(false);
    })
});