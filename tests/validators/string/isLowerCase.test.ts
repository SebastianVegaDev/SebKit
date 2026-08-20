import { describe, expect, it } from "vitest";

import { isLowerCase } from "../../../src/validators/string/isLowerCase.js";

describe("isLowerCase", () => {
    it.each([
        "hello",
        "hello world",
        "hello123",
        "hello!",
        "a",
        "abc 123!",
    ])(
        "returns true for lowerCase string: %s",
        (value) => {
            expect(isLowerCase(value)).toBe(true);
        }
    );

    it.each([
        "",
        "HELLO",
        "Hello",
        "hello Wold",
        "!23",
        "!!!",
        "   ",
    ])(
        "returns false for string: %s",
        (value) => {
            expect(isLowerCase(value)).toBe(false);
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
            expect(isLowerCase(value)).toBe(false);
        }
    );
});