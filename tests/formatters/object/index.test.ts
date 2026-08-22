import { describe, expect, it } from "vitest";

import * as objectFormatters from "../../../src/formatters/object/index.js";

describe("object formatters exports", () => {
    it("exports all object formatters", () => {
        expect(objectFormatters).toMatchObject({
            formatJSON: expect.any(Function),
        });
    });
});