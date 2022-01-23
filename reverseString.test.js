const reverseString = require("./reverseString");

it("Reverse a String test1", () => {
	expect(reverseString("hello")).toBe("olleh");
});

test("Reverse a String test2", () => {
	expect(reverseString("Hello")).toBe("olleH");
});

it("Reverse a String test3", () => {
	expect(reverseString("Hello World")).toBe("dlroW olleH");
});
