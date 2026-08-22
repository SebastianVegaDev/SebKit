import { describe, expect, it } from "vitest";

import * as numberFormatters from "../../../src/formatters/number/index.js";

describe("number formatters exports", () => {
    it("exports all number formatters", () => {
        expect(numberFormatters).toMatchObject({
            formatCompactNumber: expect.any(Function),
            formatNumber: expect.any(Function),
            formatOrdinal: expect.any(Function),
            formatPercent: expect.any(Function),
        });
    });
});
