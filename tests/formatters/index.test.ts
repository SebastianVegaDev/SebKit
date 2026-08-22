import { describe, expect, it } from "vitest";

import * as formatters from "../../src/formatters/index.js";

describe("formatters exports", () => {
    it("exports all formatter namespaces", () => {
        expect(formatters).toMatchObject({
            array: {
                formatList: expect.any(Function),
            },
            boolean: {
                formatBoolean: expect.any(Function),
            },
            currency: {
                formatAccountingCurrency: expect.any(Function),
                formatCompactCurrency: expect.any(Function),
                formatCurrency: expect.any(Function),
            },
            date: {
                formatDate: expect.any(Function),
                formatDateTime: expect.any(Function),
                formatDuration: expect.any(Function),
                formatRelativeTime: expect.any(Function),
            },
            file: {
                formatBytes: expect.any(Function),
                formatFileSize: expect.any(Function),
            },
            number: {
                formatCompactNumber: expect.any(Function),
                formatNumber: expect.any(Function),
                formatOrdinal: expect.any(Function),
                formatPercent: expect.any(Function),
            },
            object: {
                formatJSON: expect.any(Function),
            },
            string: {
                formatInitials: expect.any(Function),
                formatMask: expect.any(Function),
                formatTitleCase: expect.any(Function),
            },
        });
    });
});
