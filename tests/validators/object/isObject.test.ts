import { describe, expect, it } from "vitest";

import { isObject } from "../../../src/validators/object/isObject.js";

describe("isObject", () => {
    it.each([
        {},
        { name: "Sebastian" },
        [],
        [1, 2, 3],
        new Map(),
        new Date(),
        new Set(),
    ])(
        "returns true for object value",
        (value) => {
            expect(isObject(value)).toBe(true);
        }
    );

    it.each([
        null,
        undefined,
        "hello",
        "",
        0,
        123,
        NaN,
        true,
        false,
        Symbol("test"),
        () => {},
    ])(
        "returns false for non-object value: %s",
        (value) => {
            expect(isObject(value)).toBe(false);
        }
    );
});