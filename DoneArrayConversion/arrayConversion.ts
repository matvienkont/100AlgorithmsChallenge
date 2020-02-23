function arrayConversion(inputArray: number[]): number[] {
	var indicator: number = 0;

	while (inputArray.length != 1) {
		if ((indicator + 1) % 2 == 1) {
			inputArray = sumElements(inputArray);
		} else {
			inputArray = productElements(inputArray);
		}
		indicator++;
	}

	return inputArray;
}

const sumElements = (inputArray: number[]): number[] => {
	var resultedArray: number[] = [];
	for (let i: number = 0; i <= inputArray.length - 1; i += 2) {
		if (i == inputArray.length - 1) {
			resultedArray.push(inputArray[i]);
			break;
		}
		resultedArray.push(inputArray[i] + inputArray[i + 1]);
	}
	return resultedArray;
};

const productElements = (inputArray: number[]): number[] => {
	var resultedArray: number[] = [];
	for (let i: number = 0; i <= inputArray.length - 1; i += 2) {
		if (i == inputArray.length - 1) {
			resultedArray.push(inputArray[i]);
			break;
		}
		resultedArray.push(inputArray[i] * inputArray[i + 1]);
	}
	return resultedArray;
};

console.log(arrayConversion([ 1, 2, 3, 4, 5, 6, 7, 8 ]));
