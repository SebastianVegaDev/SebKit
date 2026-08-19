import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { isFutureDate } from "../../../src/validators/date/isFutureDate.js";

describe("isFutureDay", () => {
    beforeEach(() => {
        vi.useFakeTimers();

        vi.setSystemTime(
            new Date("2026-08-18T12:00:00.000Z"),
        );
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it("returns true for a future date", () => {
        const future = new Date("2026-08-19T12:00:00.000Z");

        expect(isFutureDate(future)).toBe(true);
    });

    it("returns false for a past date", () => {
        const past = new Date("2026-08-17T12:00:00.000Z");

        expect(isFutureDate(past)).toBe(false);
    });

    it("returns false when the time is equal to the current time", () => {
        const now = new Date("2026-08-18T12:00:00.000Z");

        expect(isFutureDate(now)).toBe(false);
    });

    it("returns false for an invalid Date", () => {
        expect(isFutureDate(new Date("invalid"))).toBe(false);
    });

    it("returns false for non-Date values", () => {
        expect(isFutureDate("2026-08-19")).toBe(false);
        expect(isFutureDate(null)).toBe(false);
        expect(isFutureDate(undefined)).toBe(false);
    });
});