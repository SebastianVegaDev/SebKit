import { describe, expect, it } from "vitest";

import * as currencyFormatters from "../../../src/formatters/currency/index.js";

describe("currency formatters exports", () => {
    it("exports all currency formatters", () => {
        expect(currencyFormatters).toMatchObject({
            formatAccountingCurrency: expect.any(Function),
            formatCompactCurrency: expect.any(Function),
            formatCurrency: expect.any(Function),
        });
    });
});