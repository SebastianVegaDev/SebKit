import { describe, expect, it } from "vitest";

import * as dateValidators from "../../../src/validators/date/index.js";

describe("date validators exports", () => {
    it("exports all date validators", () => {
        expect(dateValidators).toMatchObject({
            isDate: expect.any(Function),
            isFutureDate: expect.any(Function),
            isLeapYear: expect.any(Function),
            isPastDate: expect.any(Function),
            isValidDate: expect.any(Function),
            isWeekend: expect.any(Function),
        })
    })
})