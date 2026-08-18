import { describe, expect, it } from "vitest";

import { isEmail } from "../../../src/validators/auth/isEmail.js";

describe("isEmail", () => {
    it.each([
        "user@example.com",
        "sebastian.torres@example.com",
        "user+test@example.com",
        "user@mail.example.com",
    ])(
        "return true for a valid email: %s",
        (value) => {
            expect(isEmail(value)).toBe(true);
        }
    );

    it.each([
        "",
        "user",
        "user@",
        "@example.com",
        "user@example",
        "user@example com",
        "user@@example.com",
    ])(
        "return false for a invalid email: %s",
        (value) => {
            expect(isEmail(value)).toBe(false);
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
        "return false for a non-string value: %s",
        (value) => {
            expect(isEmail(value)).toBe(value);
        }
    );
});