import { describe, expect, it } from "vitest";

import { startsWith } from "../../../src/validators/string/startsWith.js";

describe("startsWith", () => {
    it.each([
        ["hello world", "hello"],
        ["JavaScript", "Java"],
        ["abc", "a"],
        ["abc", ""],
    ])(
        `returns true when "%s" starts with "%s"`,
        (value, search) => {
            expect(startsWith(value, search)).toBe(true);
        }
    );

    it.each([
        ["hello world", "world"],
        ["JavaScript", "java"],
        ["abv", "b"],
        ["", "a"],
    ])(
        `returns false when "%s" does not starts with "%s"`,
        (value, search) => {
            expect(startsWith(value, search)).toBe(false);
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
                expect(startsWith(value, search)).toBe(false);
            }
        );
});