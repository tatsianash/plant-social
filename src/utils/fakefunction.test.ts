import { describe, test, expect } from "@jest/globals";

import { fakeFunction } from "./fakefunction";

xdescribe("fakeFunction", () => {
	test("should add two numbers", () => {
		const result = fakeFunction(1, 2);
		expect(result).toBe(3);
	});
});
