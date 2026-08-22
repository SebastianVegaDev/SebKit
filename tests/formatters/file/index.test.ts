import { describe, expect, it } from "vitest";

import * as fileFormatters from "../../../src/formatters/file/index.js";

describe("file formatters exports", () => {
    it("exports all file formatters", () => {
        expect(fileFormatters).toMatchObject({
            formatBytes: expect.any(Function),
            formatFileSize: expect.any(Function),
        });
    });
});