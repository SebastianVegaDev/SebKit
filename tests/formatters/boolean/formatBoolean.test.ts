import { describe, expect, it } from "vitest";

import { formatBoolean } from "../../../src/formatters/boolean/formatBoolean.js"

describe("formatBoolean", () => {
    it(`returns "Yes" for true by default`, () => {
        expect(formatBoolean(true)).toBe("Yes");
    });
    
    it(`returns "No" for false by default`, () => {
        expect(formatBoolean(false)).toBe("No");
    });

    it("uses the provided true label", () => {
        const result = formatBoolean(true, {
            trueLabel: "Active"
        });

        expect(result).toBe("Active");
    });

    it("uses the provided false label", () => {
        const result = formatBoolean(false, {
            falseLabel: "Inactive"
        });

        expect(result).toBe("Inactive");
    });

    it("uses both provided labels", () => {
        const options = {
            trueLabel: "Enabled",
            falseLabel: "Disabled",
        };

        expect(formatBoolean(true, options)).toBe("Enabled");
        expect(formatBoolean(false, options)).toBe("Disabled");
    });

    it("preserves empty labels instead of using the default labels", () => {
        const options = {
            trueLabel: "",
            falseLabel: "",
        };

        expect(formatBoolean(true, options)).toBe("");
        expect(formatBoolean(false, options)).toBe("");
    })
});