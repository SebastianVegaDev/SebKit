import { describe, expect, it } from "vitest";

import * as booleanFormatters from "../../../src/formatters/boolean/index.js";

describe("boolean formatters exports", () => {
    it("exports all boolean formatters", () => {
        expect(booleanFormatters).toMatchObject({
            formatBoolean: expect.any(Function),
        });
    });
});