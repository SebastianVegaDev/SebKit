import { describe, expect, it } from "vitest";

import * as stringFormatters from "../../../src/formatters/string/index.js";

describe("string formatters exports", () => {
    it("exports all string formatters", () => {
        expect(stringFormatters).toMatchObject({
            formatInitials: expect.any(Function),
            formatMask: expect.any(Function),
            formatTitleCase: expect.any(Function),
        });
    });
});