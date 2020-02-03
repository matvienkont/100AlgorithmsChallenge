function allLongestStrings(inputArray: string[]): string[] | number {
	var maxStringLength: number = 0;

	inputArray.forEach((element) => {
		if (element.length > maxStringLength) maxStringLength = element.length;
	});

	inputArray = inputArray.filter((element) => element.length == maxStringLength);

	return inputArray;
}

console.log(
	allLongestStrings([
		'sa',
		'as',
		'ag',
		'je',
		'je'
	])
);
