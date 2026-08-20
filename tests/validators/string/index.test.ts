import { describe, expect, it } from "vitest";

import * as stringValidators from "../../../src/validators/string/index.js";

describe("string validators exports", () => {
    it("exports all string validators", () => {
        expect(stringValidators).toMatchObject({
            contains: expect.any(Function),
            endsWith: expect.any(Function),
            hasMaxLength: expect.any(Function),
            hasMinLength: expect.any(Function),
            isBlank: expect.any(Function),
            isLowerCase: expect.any(Function),
            isString: expect.any(Function),
            isUpperCase: expect.any(Function),
            matchesRegex: expect.any(Function),
            startsWith: expect.any(Function),
        });
    });
});