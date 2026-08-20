import { describe, expect, it } from "vitest";

import { isUnique } from "../../../src/validators/array/isUnique.js";

describe("isUnique", () => {
    it("returns true when every value is unique", () => {
        const values = [1, 2, 3, 4];

        expect(isUnique(values)).toBe(true);
    });

    it("returns false when the array contains duplicate values", () => {
        const values = [1, 2, 2, 3];

        expect(isUnique(values)).toBe(false);
    });

    it("returns true for an empty array", () => {
        expect(isUnique([])).toBe(true);
    });

    it("returns true for an array with a single value", () => {
        expect(isUnique(["typescript"])).toBe(true);
    });

    it("returns false for duplicated NaN values", () => {
        expect(isUnique([NaN, NaN])).toBe(false);
    });

    it("treats different object references as unique", () => {
        const firstUser = { id: 1 };
        const secondUser = { id: 1 };

        expect(isUnique([firstUser, secondUser])).toBe(true);
    });

    it("returns false when the same object reference appears more than once", () => {
        const user = { id: 1 };

        expect(isUnique([user, user])).toBe(false);
    });
});