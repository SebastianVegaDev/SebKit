import { describe, expect, it } from "vitest";

import { isLeapYear } from "../../../src/validators/date/isLeapYear.js";

describe("isLeapYear", () => {
    it("returns true for a year divisible by 4", () => {
        expect(isLeapYear(2024)).toBe(true);
    });
    
    it("returns false for a normal year", () => {
        expect(isLeapYear(2023)).toBe(false);
    });
    
    it("returns false for a century year not divisble by 400", () => {
        expect(isLeapYear(1900)).toBe(false);
    });
    
    it("returns true for a century year divisible by 400", () => {
        expect(isLeapYear(200)).toBe(true);
    });
    
    it("returns false for non-integer numbers", () => {
        expect(isLeapYear(2024.5)).toBe(false);
    });
    
    it("returns false for non-number values", () => {
        expect(isLeapYear("2024")).toBe(false);
        expect(isLeapYear(null)).toBe(false);
        expect(isLeapYear(undefined)).toBe(false);
    });
})