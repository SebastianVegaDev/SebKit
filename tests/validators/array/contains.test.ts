import { describe, expect, it } from "vitest";

import { contains } from "../../../src/validators/array/contains.js";

describe("contains", () => {
    it("returns true when the array contains the value", () => {
        const value = [1, 2, 3];

        expect(contains(value, 2)).toBe(true);
    });

    it("returns false when the array does not contain the value", () => {
        const value = [1, 2, 3];

        expect(contains(value , 4)).toBe(false);
    });

    it("returns false for a empty array", () => {
        expect(contains([], "sebKit")).toBe(false);
    });

    it("work with readonly arrays", () => {
        const value = ["javascript", "typescript", "node"] as const;

        expect(contains(value, "typescript")).toBe(true);
    });

    it("uses reference equality when comparing objects", () => {
        const user = { id: 1 };
        const values = [user];

        expect(contains(values, user)).toBe(true);
        expect(contains(values, { id: 1 })).toBe(false);
    });

    it("can find NaN", () => {
        const values = [1, 2, NaN];

        expect(contains(values, NaN)).toBe(true);
    });
})