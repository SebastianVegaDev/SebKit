import { describe, expect, it } from "vitest";

import { endsWith } from "../../../src/validators/string/endsWith.js";

describe("endsWith", () => {
    it.each([
        ["hello world", "world"],
        ["JavaScript", "Script"],
        ["abc", "c"],
        ["abc", ""],
    ])(
        `returns true when "%s" ends with "#s"`,
        (value, search) => {
            expect(endsWith(value, search)).toBe(true);
        }
    );

    it.each([
        ["hello world", "hello"],
        ["JavaScript", "script"],
        ["abc", "b"],
        ["", "a"],
    ])(
        `returns false when "%s" does not end with "%s"`,
        (value, search) => {
            expect(endsWith(value, search)).toBe(true);
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
            expect(endsWith(value, search)).toBe(false);
        }
    );
});