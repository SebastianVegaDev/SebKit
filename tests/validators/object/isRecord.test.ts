import { describe, expect, it } from "vitest";

import { isRecord } from "../../../src/validators/object/isRecord.js";

describe("isRecord", () => {
    it.each([
        {},
        { name: "Sebastian"},
        { id: 1, acive: true},
        new Date(),
        new Map(),
        new Set(),
    ])(
        "returns true for non-array object",
        (value) => {
            expect(isRecord(value)).toBe(true);
        }
    );

    it.each([
        [],
        [1, 2, 3],
        null,
        undefined,
        "hello",
        123,
        true,
        false,
        () => {}
    ])(
        "returns false for non-record value",
        (value) => {
            expect(isRecord(value)).toBe(false);
        }
    );
});