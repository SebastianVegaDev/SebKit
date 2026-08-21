import { describe, expect, it } from "vitest";

import { formatRelativeTime } from "../../../src/formatters/date/formatRelativeTime.js";

const SECOND = 1_000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const MONTH = 30 * DAY;
const YEAR = 365 * DAY;

describe("formatRelativeTime", () => {
    it('formats zero milliseconds as "now"', () => {
        const result = formatRelativeTime(0);

        expect(result).toBe("now");
    });

    it("formats a past duration using seconds", () => {
        const result = formatRelativeTime(-30 * SECOND);

        expect(result).toBe("30 seconds ago");
    });

    it("formats a future duration using minutes", () => {
        const result = formatRelativeTime(2 * MINUTE);

        expect(result).toBe("in 2 minutes");
    });

    it("formats a past duration using hours", () => {
        const result = formatRelativeTime(-2 * HOUR);

        expect(result).toBe("2 hours ago");
    });

    it("formats a future duration using days", () => {
        const result = formatRelativeTime(2 * DAY);

        expect(result).toBe("in 2 days");
    });

    it("formats a past duration using months", () => {
        const result = formatRelativeTime(-2 * MONTH);

        expect(result).toBe("2 months ago");
    });

    it("formats a future duration using years", () => {
        const result = formatRelativeTime(2 * YEAR);

        expect(result).toBe("in 2 years");
    });

    it("uses automatic relative labels by default", () => {
        expect(formatRelativeTime(-DAY)).toBe("yesterday");
        expect(formatRelativeTime(DAY)).toBe("tomorrow");
    });

    it('uses numeric labels when numeric is "always"', () => {
        const result = formatRelativeTime(-DAY, {
            numeric: "always",
        });

        expect(result).toBe("1 day ago");
    });

    it("uses the provided locale", () => {
        const result = formatRelativeTime(-DAY, {
            locale: "es",
        });

        expect(result).toBe("ayer");
    });

    it.each([
        Number.NaN,
        Infinity,
        -Infinity,
    ])("throws a RangeError for non-finite milliseconds %s", (value) => {
        expect(() => formatRelativeTime(value)).toThrowError(RangeError);
    });

    it("throws a descriptive error message", () => {
        expect(() => formatRelativeTime(Number.NaN)).toThrowError(
            "milliseconds must be a finite number",
        );
    });
});