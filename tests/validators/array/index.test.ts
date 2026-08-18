import { describe, expect, it } from "vitest";

import * as arrayValidators from "../../../src/validators/array/index.js";

describe("array validators exports", () => {
    it("exports all array validators", () => {
        expect(arrayValidators).toMatchObject({
            contians: expect.any(Function),
            hasDuplicates: expect.any(Function),
            hasLength: expect.any(Function),
            isArray: expect.any(Function),
            isNonEmptyArray: expect.any(Function),
            isUnique: expect.any(Function),
        });
    });
});