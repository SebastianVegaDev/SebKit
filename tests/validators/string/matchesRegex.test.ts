import { describe, expect, it } from "vitest";

import { matchesRegex } from "../../../src/validators/string/matchesRegex.js";

describe("matchesRegex", () => {
    it.each([
        ["hello123", /^hello\d+$/],
        ["12345", /^\d+$/],
        ["hello@example.com", /^[^\s@]+@[^\s@]+\.[^\s@]+$/],
        ["HELLO", /hello/i],
        ["", /^$/],
    ])(
        'returns true when "%s" matches the regex',
        (value, regex) => {
            expect(matchesRegex(value, regex)).toBe(true);
        }
    );

    it.each([
        ["hello", /^\d+$/],
        ["123abc", /^\d+$/],
        ["HELLO", /^hello$/],
        ["test", /^testing$/],
    ])(
        'returns false when "%s" does not match the regex',
        (value, regex) => {
            expect(matchesRegex(value, regex)).toBe(false);
        }
    );

    it.each([
        [123, /^\d+$/],
        [null, /test/],
        [undefined, /test/],
        [[], /test/],
        [{}, /test/],
        ["hello", "hello"],
        ["hello", null],
        ["hello", undefined],
        ["hello", {}],
        ["hello", []],
    ])(
        "returns false for invalid arguments",
        (value, regex) => {
            expect(matchesRegex(value, regex)).toBe(false);
        },
    );
});