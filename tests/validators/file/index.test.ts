import { describe, expect, it } from "vitest";

import * as fileValidators from "../../../src/validators/file/index.js";

describe("file validators exports", () => {
    it("exports all file validators", () => {
        expect(fileValidators).toMatchObject({
            isAllowedExtension: expect.any(Function),
            isFileSizeValid: expect.any(Function),
            isImageMime: expect.any(Function),
            isPdf: expect.any(Function),
        });
    });
});