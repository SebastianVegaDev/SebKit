import { describe, expect, it } from "vitest";

import { isImageMime } from "../../../src/validators/file/isImageMime.js";

describe("isImageMime", () => {
    it("returns true for a JPEG MIME type", () => {
        expect(isImageMime("image/jpeg")).toBe(true);
    });
    
    it("returns true for a PNG MIME type", () => {
        expect(isImageMime("image/png")).toBe(true);
    });
    
    it("returns true for a WebP MIME type", () => {
        expect(isImageMime("image/webp")).toBe(true);
    });
    
    it("returns true for an SVG MIME type", () => {
        expect(isImageMime("image/svg+xml")).toBe(true);
    });
    
    it("returns false for a non-image MIME type", () => {
        expect(isImageMime("application/pdf")).toBe(false);
    });
    
    it("returns false when the subtype is missing", () => {
        expect(isImageMime("image/")).toBe(false);
    });
    
    it("returns false when the slash is missing", () => {
        expect(isImageMime("imagejpeg")).toBe(false);
    });

    it("returns false when extra characters appear before the MIME type", () => {
        expect(isImageMime("ximage/jpeg")).toBe(false);
    });

    it("returns false when extra characters appear after the MIME type", () => {
        expect(isImageMime("image/jpeg extra")).toBe(false);
    });

    it("returns false for an empty string", () => {
        expect(isImageMime("")).toBe(false);
    });

    it("returns false for non-string values", () => {
        expect(isImageMime(null)).toBe(false);
        expect(isImageMime(undefined)).toBe(false);
        expect(isImageMime(123)).toBe(false);
        expect(isImageMime({})).toBe(false);
    });
});