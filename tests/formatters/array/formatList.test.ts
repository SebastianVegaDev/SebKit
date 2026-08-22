import { describe, expect, it } from "vitest";

import { formatList } from "../../../src/formatters/array/formatList.js";

describe("formatList", () => {
    it("formats multiple values using the default options", () => {
        const result = formatList(["HTML", "CSS", "JavaScript"]);

        expect(result).toBe("HTML, CSS, and JavaScript");
    });

    it("formats two values without adding a comma", () => {
        const result = formatList( ["HTML", "CSS"]);

        expect(result).toBe("HTML and CSS");
    });

    it("returns the value itself when the list has one item", () => {
        const result = formatList(["TypeScript"]);

        expect(result).toBe("TypeScript");
    });

    it("returns an empty string when the list is empty", () => {
        const result = formatList([]);

        expect(result).toBe("");
    });

    it("uses the provided locale", () => {
        const values = ["HTML", "CSS", "JavaScript"];

        const result = formatList(values, {
            locale: "es",
        });

        expect(result).toBe("HTML, CSS y JavaScript");
    });

    it("uses the provided list style", () => {
        const values = ["HTML", "cSS", "JavaScript"];

        const result = formatList(values, {
            style: "short",
        });

        expect(result).toBe("HTML, CSS & Java");
    });

    it("uses a disjunction when type is disjunction", () => {
        const values = ["HTML", "CSS", "JavaScript"];

        const result = formatList(values, {
            type: "disjunction",
        });

        expect(result).toBe("HTML, CSS or JavaScript");
    });

    it("accepts readonly arrays", () => {
        const values = ["JavaScript", "TypeScript"] as const;

        const result = formatList(values);

        expect(result).toBe("JavaScript and TypeScript");
    });

    it("does not modify the original array", () => {
        const values = ["HTML", "CSS", "JavaScript"];
        const originalValues = [...values];

        formatList(values);

        expect(values).toEqual(originalValues)
    });
});