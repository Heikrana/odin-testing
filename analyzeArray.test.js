const analyzeArray = require("./analyzeArray");

test("average ez", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("average hard", () => {
	expect(analyzeArray([1]).average).toBe(1);
});

test("average null", () => {
	expect(() => analyzeArray().average).toThrow(
		"Wrong arguments or empty array"
	);
});

test("min ez", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("min -ve", () => {
	expect(analyzeArray([1, 8, -3, 4, 2, 6]).min).toBe(-3);
});

test("max ez", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("length ez", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
