import { describe, expect, it } from "vitest";

import * as commonValidators from "../../../src/validators/common/index.js";

describe("array validators exports", () => {
    it("exports all array validators", () => {
        expect(commonValidators).toMatchObject({
            isDefined: expect.any(Function),
            isEmpty: expect.any(Function),
            isFalsy: expect.any(Function),
            isNil: expect.any(Function),
            isTruthy: expect.any(Function),
        });
    });
});