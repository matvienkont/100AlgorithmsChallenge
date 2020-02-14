function arrayChange(inputArray: number[]): number {
	var movesCounter = 0;
	var previousCounter = 0;

	while (true) {
		previousCounter == movesCounter;
		for (let i = 0; i < inputArray.length - 1; i++) {
			if (inputArray[i] == inputArray[i + 1]) {
				inputArray[i + 1]++;
				movesCounter++;
			}
			if (inputArray[i + 1] <= inputArray[i]) {
				inputArray[i + 1]++;
				movesCounter++;
			}
			if (inputArray[i + 1] - inputArray[i] > 1) {
				inputArray[i]++;
				movesCounter++;
			}
		}
		if (movesCounter == previousCounter) break;
		previousCounter = movesCounter;
	}
	return movesCounter;
}

console.log(arrayChange([ -111, 1, 1 ]));
