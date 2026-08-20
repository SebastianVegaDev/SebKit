import { describe, expect, it } from "vitest";

import { hasKey } from "../../../src/validators/object/hasKey.js";

describe("hasKey", () => {
    it("returns true when the object contains the key", () => {
        const value = {
            name: "Sebastian",
        };

        expect(hasKey(value, "name")).toBe(true);
    });

    it("returns true when the property value is undefined", () => {
        const value = {
            name: undefined,
        };

        expect(hasKey(value, "name")).toBe(true);
    });

    it("returns false when the object does not contain the key", () => {
        const value = {
            name: "Sebastian",
        };

        expect(hasKey(value, "age")).toBe(false);
    });

    it("returns true for an inherited key", () => {
        const prototype = {
            active: true,
        };

        const value = Object.create(prototype);

        expect(hasKey(value, "active")).toBe(true);
    });

    it("supports array indexes represented as strings", () => {
        expect(hasKey(["a", "b"], "0")).toBe(true);
    });

    it.each([
        null,
        undefined,
        "hello",
        123,
        true,
        false,
        () => {},
    ])(
        "returns false when value is not an object",
        (value) => {
            expect(hasKey(value, "name")).toBe(false);
        }
    );

    it.each([
        123,
        true,
        false,
        null,
        undefined,
        {},
        [],
        Symbol("name"),
    ])(
        "returns false when key is not a string",
        (key) => {
            expect(
                hasKey(
                    { name: "Sebastian" },
                    key,
                ),
            ).toBe(false);
        }
    );
});