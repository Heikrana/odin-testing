function analyzeArray(arr) {
	if (!Array.isArray(arr) || arr.length === 0)
		throw new Error("Wrong arguments or empty array");

	const average = (function () {
		const sum = arr.reduce((curr, prev) => prev + curr);
		return sum / arr.length;
	})();

	const min = (function () {
		let min = Infinity;
		arr.forEach((curr) => {
			if (curr < min) min = curr;
		});
		return min;
	})();

	const max = (function () {
		let max = -Infinity;
		arr.forEach((curr) => {
			if (curr > max) max = curr;
		});
		return max;
	})();

	const length = arr.length;

	return {
		average,
		min,
		max,
		length,
	};
}

module.exports = analyzeArray;
