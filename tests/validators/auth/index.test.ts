import { describe, expect, it } from "vitest";

import * as authValidators from "../../../src/validators/auth/index.js";

describe("auth validators exports", () => {
    it("exports all auth validators", () => {
        expect(authValidators).toMatchObject({
            isEmail: expect.any(Function),
            isJwt: expect.any(Function),
            isPasswordStrong: expect.any(Function),
            isUsername: expect.any(Function),
        })
    })
})