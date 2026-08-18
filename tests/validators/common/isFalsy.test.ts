import { describe, expect, expectTypeOf, it } from "vitest";

import { isFalsy } from "../../../src/validators/common/isFalsy.js";

describe("isFalsy", () => {
    it.each([
        false,
        0,
        -0,
        "",
        null,
        undefined,
        NaN,
    ])(
        "returns true for a falsy value: %s",
        (value) => {
            expect(isFalsy(value)).toBe(true);
        }
    );

    it.each([
        true,
        1,
        -1,
        "SebKit",
        "false",
        "0",
        " "
    ])(
        "returns false for a truthy primitive value: %s",
        (value) => {
            expect(isFalsy(value)).toBe(false);
        }
    );

    it("returns false for arrays and objects, including empty ones", () => {
            expect(isFalsy([])).toBe(false);
            expect(isFalsy({})).toBe(false);
    });
});