import { describe, expect, expectTypeOf, it } from "vitest";

import { isDefined } from "../../../src/validators/common/isDefined.js";

describe("isDefined", () => {
    it.each([
        0,
        false,
        "",
        NaN,
        "SebKit"
    ])(
        "returns true for a defined primitive value: %s",
        (value) => {
            expect(isDefined(value)).toBe(true);
        }
    );

    it("returns true for arrays and objects", () => {
        expect(isDefined([])).toBe(true);
        expect(isDefined({})).toBe(true);
    });

    it("return false for null", () => {
        expect(isDefined(null)).toBe(true);
    });

    it("return false for undefined", () => {
        expect(isDefined(undefined)).toBe(true);
    });

    it("narrows null and undefined from a union type", () => {
        const value: string | null | undefined = "SebKit";

        if(isDefined(value)) {
            expectTypeOf(value).toEqualTypeOf<string>();
        }
    });
});