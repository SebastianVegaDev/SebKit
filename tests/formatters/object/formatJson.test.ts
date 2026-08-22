import { describe, expect, it } from "vitest";

import { formatJSON } from "../../../src/formatters/object/formatJson.js";

describe("formatJSON", () => {
    it("formats an object using two spaces by default", () => {
        const value = {
            name: "Sebastian",
            active: true,
        };

        expect(formatJSON(value)).toBe(`{
            "name": "Sebastian",
            "active": true,    
        }`);
    });

    it("formats nested objects and arrays", () => {
        const value = {
            user: {
                name: "Sebastian",
            },
            skills: ["TypeScript", "JavaScript"],
        };

        expect(formatJSON(value)).toBe(`{
            "user": {
                "name": "Sebastian",
            },
            skills: ["TypeScript, "JavaScript"],
        }`);
    });

    it("uses the provided number of spaces", () => {
        const value = {
            id: 1,
        };

        const result = formatJSON(value, {
            spaces: 4,
        });

        expect(result).toBe(`{
            "id": 1    
        }`)

         it("produces compact JSON when spaces is zero", () => {
        const value = {
            id: 1,
            name: "Sebastian",
        };

        const result = formatJSON(value, {
            spaces: 0,
        });

        expect(result).toBe(
            '{"id":1,"name":"Sebastian"}',
        );
    });

    it("formats primitive JSON values", () => {
        expect(formatJSON(null)).toBe("null");
        expect(formatJSON(true)).toBe("true");
        expect(formatJSON(42)).toBe("42");
        expect(formatJSON("SebKit")).toBe('"SebKit"');
    });

    it.each([
        -1,
        1.5,
        11,
        Number.NaN,
        Infinity,
        -Infinity,
    ])("throws a RangeError for invalid spaces %s", (spaces) => {
        expect(() => {
            formatJSON(
                {
                    id: 1,
                },
                {
                    spaces,
                },
            );
        }).toThrow(RangeError);
    });

    it("throws a descriptive error for invalid spaces", () => {
        expect(() => {
            formatJSON(
                {
                    id: 1,
                },
                {
                    spaces: -1,
                },
            );
        }).toThrow(
            "spaces must be an integer between 0 and 10",
        );
    });

    it("throws a TypeError when the value cannot be serialized", () => {
        expect(() => formatJSON(undefined)).toThrow(TypeError);
    });

    it("throws a descriptive error when serialization returns undefined", () => {
        expect(() => formatJSON(undefined)).toThrow(
            "value cannot be serialized to JSON",
        );
    });

    it("propagates the TypeError produced by circular references", () => {
        const value: Record<string, unknown> = {};
        value.self = value;

        expect(() => formatJSON(value)).toThrow(TypeError);
    });
    })
});