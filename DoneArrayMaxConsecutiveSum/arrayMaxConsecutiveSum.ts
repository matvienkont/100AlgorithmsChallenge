function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
	var maxSum: number = 0;
	var tempSum: number = 0;
	for (let i: number = 0; i <= inputArray.length - 1; i++) {
		for (var h: number = i; h < i + k && h <= inputArray.length - 1; h++) tempSum += inputArray[h];

		if (tempSum > maxSum) maxSum = tempSum;
		tempSum = 0;
	}
	return maxSum;
}

console.log(arrayMaxConsecutiveSum([ -1, -5, 7, -6, 6 ], 5));
