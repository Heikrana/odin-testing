const capitalize = require("./capitalize.js");

test("Capitalize", () => {
	expect(capitalize("hello")).toBe("Hello");
});
