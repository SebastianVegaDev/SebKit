import { describe, expect, it } from "vitest";

import * as arrayFormatters from "../../../src/formatters/array/index.js";

describe("array formatters exports", () => {
    it("exports all array formatters", () => {
        expect(arrayFormatters).toMatchObject({
            formatList: expect.any(Function),
        });
    });
});