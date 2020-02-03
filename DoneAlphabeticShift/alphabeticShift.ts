function alphabeticShift(inputString: string): string {
	var arrayrified: string[] = inputString.split('');

	arrayrified.forEach((value, key) => {
		if (value.charCodeAt(0) >= 97 && value.charCodeAt(0) <= 121)
			arrayrified[key] = String.fromCharCode(value.charCodeAt(0) + 1);
		if (value.charCodeAt(0) === 122) arrayrified[key] = String.fromCharCode(97);
	});

	return arrayrified.join('');
}

console.log(alphabeticShift('ohmygodyouarecrazydanila'));
