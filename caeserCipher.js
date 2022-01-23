function caeserCipher(string, offset) {
	if (isNaN(offset)) throw new Error("Offset Not Given Or Incorrect Offset");

	let cipherString = "";

	for (let i = 0; i < string.length; i++) {
		const characterPlace = string.charCodeAt(i);

		if (characterPlace >= 97 && characterPlace <= 122)
			// lowercase Letters
			cipherString += cipher(characterPlace, offset, "lower");
		else if (characterPlace >= 65 && characterPlace <= 90)
			//uppercase Letters
			cipherString += cipher(characterPlace, offset, "upper");
		else if (characterPlace >= 49 && characterPlace <= 57)
			cipherString += string.charAt(i);
		// numbers not implemented :(
		else throw new Error("Only Latin Alphabets and Numbers are allowed");
	}

	return cipherString;
}

function cipher(characterPlace, offset, charCase) {
	let valueChange = 0;
	if (charCase === "lower") valueChange = 97;
	else if (charCase === "upper") valueChange = 65;

	const actualCharacterPlace = characterPlace - valueChange; // changing to 0-25 base
	// e(x) = (x + k) % 26;
	const cipheredCharacterPlace = (actualCharacterPlace + offset) % 26;

	const convertedCharAscii = cipheredCharacterPlace + valueChange; // changing back to ascii
	return String.fromCharCode(convertedCharAscii);
}

module.exports = caeserCipher;
