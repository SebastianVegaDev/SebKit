import { describe, expect, it } from "vitest";

import * as numberValidators from "../../../src/validators/number/index.js";

describe("number validators exports", () => {
    it("exports all number validators", () => {
        expect(numberValidators).toMatchObject({
            isBetween: expect.any(Function),
            isEven: expect.any(Function),
            isFiniteNumber: expect.any(Function),
            isFloat: expect.any(Function),
            isInteger: expect.any(Function),
            isNegative: expect.any(Function),
            isNumber: expect.any(Function),
            isOdd: expect.any(Function),
            isPositive: expect.any(Function),
        });
    });
});