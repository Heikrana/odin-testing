function capitalize(inputString) {
	const newString =
		inputString.charAt(0).toUpperCase() + inputString.substring(1);
	return newString;
}

module.exports = capitalize;
