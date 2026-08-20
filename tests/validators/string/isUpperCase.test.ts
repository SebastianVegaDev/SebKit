import { describe, expect, it } from "vitest";

import { isUpperCase } from "../../../src/validators/string/isUpperCase.js";

describe("isUpperCase", () => {
    it.each([
        "HELLO",
        "HELLO WORLD",
        "HELLO123",
        "HELLO!",
        "A",
        "ABC 123!",
    ])(
        'returns true for uppercase string: %s',
        (value) => {
            expect(isUpperCase(value)).toBe(true);
        }
    );

    it.each([
        "",
        "hello",
        "Hello",
        "HELLO World",
        "123",
        "!!!",
        "   ",
    ])(
        'returns false for string: %s',
        (value) => {
            expect(isUpperCase(value)).toBe(false);
        }
    );

    it.each([
        123,
        true,
        false,
        null,
        undefined,
        [],
        {},
    ])(
        "returns false for non-string value: %s",
        (value) => {
            expect(isUpperCase(value)).toBe(false);
        }
    );
});