import { describe, expect, it } from "vitest";

import * as networkValidators from "../../../src/validators/network/index.js";

describe("network validators exports", () => {
    it("exports all network validators", () => {
        expect(networkValidators).toMatchObject({
            isDomain: expect.any(Function),
            isIPv4: expect.any(Function),
            isIPv6: expect.any(Function),
            isUrl: expect.any(Function),
        });
    });
});