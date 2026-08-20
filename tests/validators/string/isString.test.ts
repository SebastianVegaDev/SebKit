import { describe, expect, it } from "vitest";

import { isString } from "../../../src/validators/string/isString.js";

describe("isString", () => {
    it.each([
        "",
        "hello",
        " ",
        "123",
        "true",
        "こんにちは",
    ])(
        "returns true for string: %s",
        (value) => {
            expect(isString(value)).toBe(true);
        }
    );

    it.each([
        "0",
        "123",
        NaN,
        Infinity,
        true,
        false,
        null,
        undefined,
        [],
        {}
    ])(
        "returns false for non-string value: %s",
        (value) => {
            expect(isString(value)).toBe(false);
        }
    )
});