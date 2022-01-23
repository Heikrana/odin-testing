const calculator = {
	add: function (x, y) {
		return x + y;
	},
	subtract: function (x, y) {
		return x - y;
	},
	multiply: function (x, y) {
		return x * y;
	},
	divide: function (x, y) {
		if (y === 0) throw new Error("Divide by 0, not permitted");

		return x / y;
	},
};

module.exports = calculator;
