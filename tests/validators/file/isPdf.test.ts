import { describe, expect, it } from "vitest";

import { isPdf } from "../../../src/validators/file/isPdf.js";

describe("isPdf", () => {
    it("returns true for a PDF filename", () => {
        expect(isPdf("document.pdf")).toBe(true);
    });

    it("is case-insensitive", () => {
        expect(isPdf("document.PDF")).toBe(true);
        expect(isPdf("document.Pdf")).toBe(true);
    });

    it("returns true when the filename contains multiple dots", () => {
        expect(isPdf("inovoice.final.v2.pdf")).toBe(true);
    });

    it("returns false for a different file extension", () => {
        expect(isPdf("document.docx")).toBe(false);
    });

    it("returns false when pdf appears in the name but not as the extension", () => {
        expect(isPdf("document.pdf.docx")).toBe(false);
    });

    it("returns false when the filename has no extension", () => {
        expect(isPdf("document")).toBe(false);
    });

    it("returns false for an empty string", () => {
        expect(isPdf("")).toBe(false);
    });

    it("returns false for non-string values", () => {
        expect(isPdf(null)).toBe(false);
        expect(isPdf(undefined)).toBe(false);
        expect(isPdf(123)).toBe(false);
        expect(isPdf({})).toBe(false);
    });
});