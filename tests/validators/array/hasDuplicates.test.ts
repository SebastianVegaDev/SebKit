import { describe, expect, it } from "vitest";

import { hasDuplicates } from "../../../src/validators/array/hasDuplicates.js";

describe("hasDuplicates", () => {
    it("returns true when the array contains duplicate values", () => {
        const value = [1, 2, 2, 3];

        expect(hasDuplicates(value)).toBe(true);
    });

    it("returns false when every value is unique", () => {
        const value = [1, 2, 3, 4];

        expect(hasDuplicates(value)).toBe(false);
    });

    it("returns false for an empty array", () => {
        expect(hasDuplicates([])).toBe(false);
    });

    it("returns false for an array with a single value", () => {
        expect(hasDuplicates(["typescript"])).toBe(false);
    });

    it("detects duplicates NaN values", () => {
        expect(hasDuplicates([NaN, NaN])).toBe(true);
    });

    it("treats different object references as unique", () => {
        const firstUser = { id: 1 };
        const secondUser = { id: 1 };

        expect(hasDuplicates([firstUser, secondUser])).toBe(false);
    });

    it("detects duplicated object references", () => {
        const user = { id: 1 };

        expect(hasDuplicates([user, user])).toBe(true);
    });
})