const calculator = require("./calculator");

test("Add test1", () => {
	expect(calculator.add(1, 2)).toEqual(3);
});

test("Add test2", () => {
	expect(calculator.add(-1, 2)).toEqual(1);
});

test("Add test3", () => {
	expect(calculator.add(-2, -2)).toEqual(-4);
});

test("Subtract test1", () => {
	expect(calculator.subtract(2, 2)).toEqual(0);
});

test("Subtract test2", () => {
	expect(calculator.subtract(-2, -2)).toEqual(0);
});

test("Subtract test3", () => {
	expect(calculator.subtract(-2, 2)).toEqual(-4);
});

test("Multiply test1", () => {
	expect(calculator.multiply(4, 10)).toEqual(40);
});

test("Multiply test2", () => {
	expect(calculator.multiply(-2, -5)).toEqual(10);
});

test("Multiply test3", () => {
	expect(calculator.multiply(-2, 5)).toEqual(-10);
});

test("Divide test1", () => {
	expect(calculator.divide(5, 2)).toEqual(2.5);
});

test("Divide test2", () => {
	expect(calculator.divide(10, -2)).toEqual(-5);
});

test("Divide test3", () => {
	expect(() => calculator.divide(10, 0)).not.toEqual(Infinity);
});

test("Divide test3.1", () => {
	expect(() => calculator.divide(10, 0)).toThrow("Divide by 0, not permitted");
});
