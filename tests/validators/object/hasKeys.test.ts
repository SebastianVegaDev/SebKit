import { describe, expect, it } from "vitest";

import { hasKeys } from "../../../src/validators/object/hasKeys.js";

describe("hasKeys", () => {
    it("returns true when the object contains all keys", () => {
        const value = {
            id: 1,
            name: "Sebastian",
            active: true,
        };

        expect(
            hasKeys(
                value,
                ["id", "name", "active"],
            ),
        ).toBe(true);
    });

    it("returns true when properties have undefined values", () => {
        const value = {
            name: undefined,
            age: undefined,
        };

        expect(
            hasKeys(
                value,
                ["name", "age"],
            ),
        ).toBe(true);
    });

    it("returns false when at least one key is missing", () => {
        const value = {
            id: 1,
            name: "Sebastian",
        };

        expect(
            hasKeys(
                value,
                ["id", "name", "age"],
            ),
        ).toBe(false);
    });

    it("returns true for an empty keys array", () => {
        expect(
            hasKeys(
                { name: "Sebastian" },
                [],
            ),
        ).toBe(true);
    });

    it("returns true when all inherited keys exist", () => {
        const prototype = {
            active: true,
        };

        const value = Object.create(prototype);

        expect(
            hasKeys(
                value,
                ["active"],
            ),
        ).toBe(true);
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
            expect(
                hasKeys(
                    value,
                    ["name"],
                ),
            ).toBe(false);
        }
    );

    it.each([
        null,
        undefined,
        "name",
        123,
        true,
        {},
    ])(
        "returns false when keys is not an array",
        (keys) => {
            expect(
                hasKeys(
                    { name: "Sebastian" },
                    keys,
                ),
            ).toBe(false);
        }
    );

    it.each([
        [["name", 123]],
        [["name", null]],
        [["name", undefined]],
        [["name", true]],
        [["name", {}]],
        [["name", []]],
    ])(
        "returns false when keys contains a non-string value",
        (keys) => {
            expect(
                hasKeys(
                    { name: "Sebastian" },
                    keys,
                ),
            ).toBe(false);
        }
    );
});