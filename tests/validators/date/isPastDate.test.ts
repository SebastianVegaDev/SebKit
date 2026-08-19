import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { isPastDate } from "../../../src/validators/date/isPastDate.js";

describe("isPastDate", () => {
    beforeEach(() => {
        vi.useFakeTimers();

        vi.setSystemTime(
            new Date("2026-08-18T12:00:00.000Z"),
        );
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it("returns true for a past date", () => {
        const past = new Date("2026-08-17T12:00:00.000Z");

        expect(isPastDate(past)).toBe(true);
    });

    it("returns false for a future date", () => {
        const future = new Date("2026-08-19T12:00:00.000Z");

        expect(isPastDate(future)).toBe(false);
    });

    it("returns false when the date is equal to the current time", () => {
        const now = new Date("2026-08-18T12:00:00.000Z");

        expect(isPastDate(now)).toBe(false);
    });

    it("returns false for an invalid Date", () => {
        expect(isPastDate(new Date("invalid"))).toBe(false);
    });

    it("returns false for non-Date values", () => {
        expect(isPastDate("2026-08-17")).toBe(false);
        expect(isPastDate(null)).toBe(false);
        expect(isPastDate(undefined)).toBe(false);
    });
});