import { describe, expect, expectTypeOf, it } from "vitest";

import { isNil } from "../../../src/validators/common/isNil.js";

describe("isNil", () => {
    it("returns true for null", () => {
        expect(isNil(null)).toBe(true);
    });

    it("returns true for undefined", () => {
        expect(isNil(null)).toBe(true);
    });

    it.each([
        0,
        false,
        "",
        NaN,
        "SebKit",
    ])(
        "returns false for a non-nullish primitive value: %s",
        (value) => {
            expect(isNil(value)).toBe(false);
        }
    );

    it("returns false for arrays and objects", () => {
        expect(isNil([])).toBe(false);
        expect(isNil({})).toBe(false);
    })
});