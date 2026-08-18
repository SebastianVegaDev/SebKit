import { describe, expect, it } from "vitest";

import { isUsername } from "../../../src/validators/auth/isUsername.js";

describe("isUsername", () => {
    it.each([
        "Sebastian",
        "sebas123",
        "Sebas_Vega",
        "abc",
        "A12"
    ])(
        "returns true for a valid username: %s",
        (value) => {
            expect(isUsername(value)).toBe(true);
        }
    );

    it("returns true for a username with the minimun allowed length", () => {
        expect(isUsername("abc")).toBe(true);
    });

    it("returns true for a username with the maximum allowed length", () => {
        expect(isUsername("a".repeat(20))).toBe(true);
    });

    it("returns false when the username is shorter than three characters", () => {
        expect(isUsername("ab")).toBe(false);
    });

    it("returns false when the username is longer than twenty characters", () => {
        expect(isUsername("a".repeat(21))).toBe(false);
    });

    it.each([
        "1sebastian",
        "_sebastian",
    ])(
        "return false when the username does not start with a letter: %s",
        (value) => {
            expect(isUsername(value)).toBe(false);
        } 
    );

    it.each([
        "sebas-vega",
        "sebas vega",
        "sebas.vega",
        "sebas@vega",
    ])(
        "returns false when the username contain an invalid character: %s",
        (value) => {
            expect(isUsername(value)).toBe(false);
        }
    );

    it.each([
        null,
        undefined,
        123,
        true,
        {},
        [],
    ])(
        "returns false for a non-string value: %s",
        (value) => {
            expect(isUsername(value)).toBe(false);
        }
    )
})