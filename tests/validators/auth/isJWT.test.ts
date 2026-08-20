import { describe, expect, it } from "vitest";

import { isJwt } from "../../../src/validators/auth/isJWT.js";

describe("isJwt", () => {
    it("returns true for a string with three valid Base64URL-like parts", () => {
        const value =
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.signature_123-ABC";

        expect(isJwt(value)).toBe(true);
    });

    it.each([
        "header.payload",
        "header.payload.signature.extra",
        "header",
        "",
    ])(
        "return false when the token does not contain exactly three parts: %s",
        (value) => {
            expect(isJwt(value)).toBe(false);
        }
    );

    it.each([
        ".payload.signature",
        "header..signature",
        "header.payload.",
    ]) (
        "return false when a tok part is empty: %s",
        (value) => {
            expect(isJwt(value)).toBe(false);
        }
    );

    it.each([
        "head+er.payload.signature",
        "header.pay load.signature",
        "header.payload.sign@ture",
        "header=.payload.signature",
    ])(
        "returns false when the token part contains invalid Base64URL characters: %s",
        (value) => {
            expect(isJwt(value)).toBe(false);
        }
    );

    it.each([
        null,
        undefined,
        undefined,
        true,
        {},
        [],
    ]) (
        "returns false for a non-string value: %s",
        (value) => {
            expect(isJwt(value)).toBe(false);
        }
    )
});