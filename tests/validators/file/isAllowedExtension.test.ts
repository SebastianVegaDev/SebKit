import { describe, expect, it } from "vitest";

import { isAllowedExtension } from "../../../src/validators/file/isAllowedExtension.js";

describe("isAllowedExtension", () => {
    it("returns true when the file extension is allowed", () => {
        expect(
            isAllowedExtension("photo.jpg", ["jpg", "png"]),
        ).toBe(true);
    });
    
    it("returns false when the file extension is not allowed", () => {
        expect(
            isAllowedExtension("document.pdf", ["jpg", "png"]),
        ).toBe(false);
    });
    
    it("is case-insensitive for the filename extension", () => {
        expect(
            isAllowedExtension("photo.JPG", ["jpg", "png"]),
        ).toBe(true);
    });
    
    it("is case-insensitive for allowed extensions", () => {
        expect(
            isAllowedExtension("photo.JPG", ["JPG", "PNG"]),
        ).toBe(true);
    });
    
    it("accepts allowed extensions with a leading dot", () => {
        expect(
            isAllowedExtension("photo.jpg", [".jpg", ".png"]),
        ).toBe(true);
    });

    it("uses the last extension when the filename contains multiple dots", () => {
        expect(
            isAllowedExtension("archive.tar.gz", ["gz"]),
        ).toBe(true);

        expect(
            isAllowedExtension("archive.tar.gz", ["tar"]),
        ).toBe(false);
    });

    it("returns false when the filename has no extension", () => {
        expect(
            isAllowedExtension("README", ["md"]),
        ).toBe(false);
    });

    it("returns false when the filename ends with a dot", () => {
        expect(
            isAllowedExtension("file.", ["txt"]),
        ).toBe(false);
    });

    it("returns false when the allowed extensions array is empty", () => {
        expect(
            isAllowedExtension("photo.jpg", []),
        ).toBe(false);
    });

    it("returns false for non-string filenames", () => {
        expect(isAllowedExtension(null, ["jpg"])).toBe(false);
        expect(isAllowedExtension(undefined, ["jpg"])).toBe(false);
        expect(isAllowedExtension(123, ["jpg"])).toBe(false);
        expect(isAllowedExtension({}, ["jpg"])).toBe(false);
    });
});