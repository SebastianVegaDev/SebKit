import { describe, expect, it } from "vitest";

import { isBlank } from "../../../src/validators/string/isBlank.js";

describe("isBlank", () => {
    it.each([
        "",
        " ",
        "    ",
        "\t",
        "\n",
        "\r\n",
        "  \t\n",
    ])(
        "returns true for blank string: %s",
        (value) => {
            expect(isBlank(value)).toBe(true);
        }
    );

    it.each([
        "a",
        "hello",
        " heelo ",
        "0",
        " false ",
    ])(
        "returns false for non-blank string: %s",
        (value) => {
            expect(isBlank(value)).toBe(false);
        }
    );

    it.each([
        0,
        123,
        false,
        true,
        null,
        undefined,
        [],
        {},
    ])(
        "returns false for non-string value: %s",
        (value) => {
            expect(isBlank(value)).toBe(false);
        }
    );
});