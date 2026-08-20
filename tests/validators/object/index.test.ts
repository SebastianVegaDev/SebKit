import { describe, expect, it } from "vitest";

import * as objectValidators from "../../../src/validators/object/index.js";

describe("object validators exports", () => {
    it("exports all object validators", () => {
        expect(objectValidators).toMatchObject({
            hasKey: expect.any(Function),
            hasKeys: expect.any(Function),
            isEmptyObject: expect.any(Function),
            isObject: expect.any(Function),
            isPlainObject: expect.any(Function),
            isRecord: expect.any(Function),
        });
    });
});