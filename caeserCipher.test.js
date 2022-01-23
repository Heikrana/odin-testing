const caeserCipher = require("./caeserCipher.js");

test("No Offset, error test", () => {
	expect(() => caeserCipher("abcd")).toThrow(
		"Offset Not Given Or Incorrect Offset"
	);
});

test("ROT13, onlySmall", () => {
	expect(caeserCipher("abcdefghijklmnopqrstuvwxyz", 13)).toBe(
		"nopqrstuvwxyzabcdefghijklm"
	);
});

test("ROT13, onlySmallRev", () => {
	expect(caeserCipher("zyxwvutsrqponmlkjihgfedcba", 13)).toBe(
		"mlkjihgfedcbazyxwvutsrqpon"
	);
});

test("ROT13, capitalMix", () => {
	expect(caeserCipher("usndooABNBS", 13)).toBe("hfaqbbNOAOF");
});

test("ROT7, capitalMix", () => {
	expect(caeserCipher("usndooABNBS", 7)).toBe("bzukvvHIUIZ");
});

test("ROT19, capitalMix", () => {
	expect(caeserCipher("usndooABNBS", 19)).toBe("nlgwhhTUGUL");
});

test("ROT13, with numbers", () => {
	expect(caeserCipher("abcd1234WXYZ", 13)).toBe("nopq1234JKLM");
});

test("ROT13, with spc char", () => {
	expect(() => caeserCipher("abcdEFGH,.;'", 13)).toThrow(
		"Only Latin Alphabets and Numbers are allowed"
	);
});
