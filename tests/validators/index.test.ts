import { describe, expect, it } from "vitest";

import * as validators from "../../src/validators/index.js";

describe("validators exports", () => {
    it("exports all validator namespaces", () => {
        expect(validators).toMatchObject({
            array: expect.any(Object),
            auth: expect.any(Object),
            common: expect.any(Object),
            date: expect.any(Object),
            file: expect.any(Object),
            network: expect.any(Object),
            number: expect.any(Object),
            object: expect.any(Object),
            string: expect.any(Object),
        });
    });
});