import { describe, expect, it } from "vitest";

import { formatDuration } from "../../../src/formatters/date/formatDuration.js";

describe("formatDuration", () => {
    it("formats zero milliseconds", () => {
        expect(formatDuration(0)).toBe("0s");
    });

    it("formats a duration containing only seconds", () => {
        expect(formatDuration(45_090)).toBe("45s");
    });

    it("discards incomplete seconds", () => {
        expect(formatDuration(1_999)).toBe("1s");
    });

    it("formats minutes and seconds", () => {
        expect(formatDuration(125_000)).toBe("2m 5s");
    });

    it("formats hours, minutes and seconds", () => {
        expect(formatDuration(3_725_000)).toBe("1h 2m 5s");
    });

    it("omits units whose value is zero", () => {
        expect(formatDuration(120_000)).toBe("2m");
        expect(formatDuration(3_600_000)).toBe("1h");
    });

    it("allows durations greater than twenty-four hours", () => {
        expect(formatDuration(90_000_000)).toBe("25h");
    });

    it.each([
        -1,
        NaN,
        Infinity,
        -Infinity,
    ])(
        "throws a RangeError for invalid milliseconds: %s",
        (value) => {
            expect(() => formatDuration(value)).toThrow(RangeError);
        }
    );

    it("throws a descriptive error message", () => {
        expect(() => formatDuration(-1)).toThrow(
            "milliseconds must be a non-negative finite number"
        )
    });
});