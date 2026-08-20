import { describe, expect, expectTypeOf, it } from "vitest";

import { isTruthy } from "../../../src/validators/common/isTruthy.js";

describe("isTruthy", () => {
    it.each([
        true,
        1,
        -1,
        "SebKit",
        "false",
        "0",
        " ",
    ])(
        "returns true for a truthy primitive value: %s",
        (value) => {
            expect(isTruthy(value)).toBe(true);
        }
    );

    it("returns true for arrays and objects, including empty ones", () => {
        expect(isTruthy([])).toBe(true);
        expect(isTruthy({})).toBe(true);
    });

    it.each([
        false,
        0,
        "",
        null,
        undefined,
        NaN,
    ])(
        "return false for a falsy value: %s",
        (value) => {
            expect(isTruthy(value)).toBe(false);
        }
    );
});