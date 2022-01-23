function reverseString(string) {
	let revString = "";
	for (let i = string.length - 1; i >= 0; i--) {
		revString += string.charAt(i);
	}

	console.log(revString);
	return revString;
}

module.exports = reverseString;
