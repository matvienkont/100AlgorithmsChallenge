function arrayMaximalAdjacentDifference(inputArray: number[]): number {
	let arrayLength: number = inputArray.length;
	let maxDiff: number = 0;
	for (let i: number = 0; i < arrayLength - 1; i++) {
		let compare: number = Math.abs(inputArray[i] - inputArray[i + 1]);
		console.log(inputArray[i], inputArray[i + 1]);
		if (compare > maxDiff) maxDiff = compare;
	}

	return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([ 2, 4, 1, 5 ]));
