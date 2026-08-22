import { describe, expect, it } from "vitest";

import { formatBytes } from "../../../src/formatters/file/formatBytes.js";

describe("formatBytes", () => {
    it("format zero bytes", () => {
        expect(formatBytes(0)).toBe("0 B");
    });

    it("keeps values smaller than one kilobyte in bytes", () => {
        expect(formatBytes(512)).toBe("512 B");
    });

    it.each([
        [1_024, "1 KB"],
        [1_024 ** 2, "1 MB"],
        [1_024 ** 3, "1 GB"],
        [1_024 ** 4, "1 TB"],
        [1_024 ** 5, "1 PB"],
    ])(
        "formats %s butes as %s",
        (bytes, expected) => {
            expect(formatBytes(bytes)).toBe(expected);
        }
    );

    it("formats decimal unit values", () => {
        expect(formatBytes(1_536)).toBe("1.5 KB");
    });

    it("uses two decimals by default", () => {
        expect(formatBytes(1_264)).toBe("1.23 KB");
    });

    it("uses the provided number of decimals", () => {
        const result = formatBytes(1_264, {
            decimals: 3,
        });

        expect(result).toBe("1.234 KB");
    });

    it("rounds the result when decimals is zero", () => {
        const result = formatBytes(1_536, {
            decimals: 0
        });

        expect(result).toBe("2 KB");
    });

    it.each([
        -1,
        NaN,
        Infinity,
        -Infinity,
    ])(
        "throws a RangeError for invalid bytes %s",
        (bytes) => {
            expect(() => formatBytes(bytes)).toThrow(RangeError);
        }
    );

    it("throws a descriptive error for invalid bytes", () => {
        expect(() => formatBytes(-1)).toThrow(
            "bytes must be a non-negative finite number",
        );
    });

    it.each([
        -1,
        1.5,
        Number.NaN,
        Infinity,
        -Infinity,
    ])("throws a RangeError for invalid decimals %s", (decimals) => {
        expect(() => {
            formatBytes(1_024, {
                decimals,
            });
        }).toThrow(RangeError);
    });

    it("throws a descriptive error for invalid decimals", () => {
        expect(() => {
            formatBytes(1_024, {
                decimals: -1,
            });
        }).toThrow(
            "decimals must be a non-negative integer",
        );
    });
});