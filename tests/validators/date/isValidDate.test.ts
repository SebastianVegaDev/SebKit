import { describe, expect, it } from "vitest";

import { isValidDate } from "../../../src/validators/date/isValidDate.js";

describe("isValidDate", () => {
    it("returns true for a valid Date object", () => {
        expect(isValidDate(new Date("2026-08-18"))).toBe(true);
    });
    
    it("returns true for a valid date string", () => {
        expect(isValidDate("2026-08-18")).toBe(true);
    });
    
    it("returns true for a valid timestamp ", () => {
        expect(isValidDate(1_700_000_000_000)).toBe(true);
    });
    
    it("returns false for an invalid date string ", () => {
        expect(isValidDate("not-a-date")).toBe(false);
    });
    
    it("returns false for an invalid Date object", () => {
        expect(isValidDate(new Date("invalid"))).toBe(false);
    });
    
    it("returns false for unsupported values", () => {
        expect(isValidDate(null)).toBe(false);
        expect(isValidDate(undefined)).toBe(false);
        expect(isValidDate({})).toBe(false);
        expect(isValidDate([])).toBe(false);
        expect(isValidDate(true)).toBe(false);
    });
})