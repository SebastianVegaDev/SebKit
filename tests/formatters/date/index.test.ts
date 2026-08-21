import { describe, expect, it } from "vitest";

import * as dateFormatters from "../../../src/formatters/date/index.js";

describe("date formatters exports", () => {
    it("exports all date formatters", () => {
        expect(dateFormatters).toMatchObject({
            formatDate: expect.any(Function),
            formatDateTime: expect.any(Function),
            formatDuration: expect.any(Function),
            formatRelativeTime: expect.any(Function),
        });
    });
});