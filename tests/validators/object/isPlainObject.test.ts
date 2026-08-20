import { describe, expect, it } from "vitest";

import { isPlainObject } from "../../../src/validators/object/isPlainObject.js";

describe("isPlainObject", () => {
    it.each([
        {},
        { name: "Sebastian" },
        { id: 1, nested: { active: true } },
        new Object(),
    ])(
        "returns true for plain object",
        (value) => {
            expect(isPlainObject(value)).toBe(true);
        }
    );

    it.each([
        null,
        undefined,
        [],
        [1, 2, 3],
        new Date(),
        new Map(),
        new Set(),
        "hello",
        123,
        true,
        false,
        () => {},
    ])(
        "returns false for non-plain object",
        (value) => {
            expect(isPlainObject(value)).toBe(false);
        }
    );

    it("returns false for an object with a null prototype", () => {
        const value = Object.create(null);

        expect(isPlainObject(value)).toBe(false);
    });

    it("returns false for a class instance", () => {
        class User {}

        const user = new User();

        expect(isPlainObject(user)).toBe(false);
    });
});