import { describe, expect, expectTypeOf, it } from "vitest";

import { isEmpty } from "../../../src/validators/common/isEmpty.js";

describe("isEmpty", () => {
    describe("nullish values", () => {
        it("returns true for null", () => {
            expect(isEmpty(null)).toBe(true);
        });
        
        it("returns true for undefined", () => {
            expect(isEmpty(undefined)).toBe(true);
        });
    });

    describe("strings", () => {
        it("returns true for an empty string", () => {
            expect(isEmpty("")).toBe(true);
        });

        it("returns false for a non-empty string", () => {
            expect(isEmpty("SebKit")).toBe(false);
        });

        it("returns false for a string containing only whitespace", () => {
            expect(isEmpty("    ")).toBe(false);
        });
    });

    describe("arrays", () => {
        it("returns true for an empty array", () => {
            expect(isEmpty([])).toBe(true);
        });

        it("returns false for a non-empty array", () => {
            expect(isEmpty([1, 2, 3])).toBe(false);
        });

        it("returns false when the arrays contains undefined", () => {
            expect(isEmpty([undefined])).toBe(false);
        });
    });

    describe("maps and sets", () => {
        it("returns true for an empty Map", () => {
            expect(isEmpty(new Map())).toBe(true);
        });

        it("returns false for a non-empty Map", () => {
            const map = new Map([
                ["language", "typescript"],
            ]);

            expect(isEmpty(map)).toBe(false)
        });


        it("returns true for an empty Set", () => {
            expect(isEmpty(new Set())).toBe(true);
        });

        it("returns false for a non-empty Set", () => {
            const set = new Set([
                "JavaScript",
                "TypeScript",
            ]);

            expect(isEmpty(set)).toBe(false)
        });
    });
});