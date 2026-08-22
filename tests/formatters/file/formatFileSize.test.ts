import { describe, expect, it } from "vitest";

import { formatFileSize } from "../../../src/formatters/file/formatFileSize.js";

describe("formatFileSize", () => {
    it("formats the size of a file-like object", () => {
        const file = {
            size: 1_536,
        };

        const result = formatFileSize(file);

        expect(result).toBe("1.5 KB");
    });

    it("formats a file-like object with zero size", () => {
        const file = {
            size: 0,
        };

        const result = formatFileSize(file);

        expect(result).toBe("0 B");
    });

    it("passes the decimals option to formatBytes", () => {
        const file = {
            size: 1_264,
        };

        const result = formatFileSize(file, {
            decimals: 3,
        });

        expect(result).toBe("1.234 KB");
    });

    it("accepts a readonly file-like object", () => {
        const file = {
            size: 1_024,
        } as const;

        const result = formatFileSize(file);

        expect(result).toBe("1 KB");
    });

    it("throws a RangeError when the file size is invalid", () => {
        const file = {
            size: -1,
        };

        expect(() => formatFileSize(file)).toThrow(RangeError);
    });

    it("propagates invalid decimals errors", () => {
        const file = {
            size: 1_024,
        };

        expect(() => {
            formatFileSize(file, {
                decimals: 1.5,
            });
        }).toThrow(RangeError);
    });
});