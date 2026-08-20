import { describe, expect, it } from "vitest";

import { contains } from "../../../src/validators/string/contains.js";

describe("contains", () => {
    it.each([
        ["hello world", "world"],
        ["JavaScript", "Script"],
        ["abc", "b"],
        ["abv", ""],
    ])(
        `returns true when "%s" contains "%s"`,
        (value, search) => {
            expect(contains(value, search)).toBe(true);
        }
    );

    it.each([
        ["hello world", "typescript"],
        ["JavaScript", "script"],
        ["abc", "d"],
        ["", "a"],
    ])(
        `returns false when "%s" does not continas "%s"`,
        (value, search) => {
            expect(contains(value, search)).toBe(false);
        }
    );

    it.each([
        [123, "hello"],
        [null, "hello"],
        [undefined, "hello"],
        [[], "hello"],
        [{}, "helloa"],
        ["hello", 123],
        ["hello", null],
        ["hello", undefined],
        ["hello", []],
        ["hello", {}],
    ])(
        `returns false for invalid arguments`,
        (value, search) => {
            expect(contains(value, search)).toBe(false);
        }
    );
});