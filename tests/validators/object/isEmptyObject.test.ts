import { describe, expect, it } from "vitest";

import { isEmptyObject } from "../../../src/validators/object/isEmptyObject.js";

describe("isEmptyObject", () => {
    it.each([
        {},
    ])(
        "returns true for empty object",
        (value) => {
            expect(isEmptyObject(value)).toBe(true);
        }
    );

    it.each([
        { name: "Sebastian" },
        { name: undefined },
        { id: 1, active: true },
    ])(
        "returns false for non-empty object",
        (value) => {
            expect(isEmptyObject(value)).toBe(false);
        }
    );

    it.each([
        [],
        [1, 2, 3],
        null,
        undefined,
        "hello",
        123,
        true,
        false,
        () => {},
    ])(
        "returns false for non-empty-object value",
        (value) => {
            expect(isEmptyObject(value)).toBe(false);
        }
    );
});
