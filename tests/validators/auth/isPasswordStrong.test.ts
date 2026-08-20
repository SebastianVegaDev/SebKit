import { describe, expect, it } from "vitest";

import { isPasswordStrong } from "../../../src/validators/auth/isPasswordStrong.js";

describe("isPasswordStrong", () => {
    it.each([
        "Password1!",
        "SebKit123!",
        "Testing_2026A",
        "Abcdef1!",
    ])(
        "returns true for a strong password: %s",
        (value) => {
            expect(isPasswordStrong(value)).toBe(true)
        }
    );

    it("returns false when the password has fewer than eigth characters", () => {
        expect(isPasswordStrong("Abcd1!")).toBe(false);
    });

    it("returns false when the password has no lowerCase letter", () => {
        expect(isPasswordStrong("PASSWORD1!")).toBe(false);
    });

    it("returns false when the password has no upperCase letter", () => {
        expect(isPasswordStrong("password1!")).toBe(false);
    });

    it("returns false when the password has no number", () => {
        expect(isPasswordStrong("Password!")).toBe(false);
    });

    it("returns false when the password has no special character", () => {
        expect(isPasswordStrong("Password1")).toBe(false);
    });

    it.each([
        null,
        undefined,
        12345678,
        true,
        {},
        [],
    ])(
        "return false for a non-string value: %s",
        (value) => {
            expect(value).toBe(false);
        }
    );
})