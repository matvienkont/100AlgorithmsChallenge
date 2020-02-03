function adjacentElementsProduct(inputArray: number[]): number {
	var arrayLength: number = inputArray.length;
	var maxProduct: number = 0;

	for (let i = 0; i < arrayLength - 1; i++) {
		let temporaryProduct: number = inputArray[i] * inputArray[i + 1];
		if (temporaryProduct > maxProduct) maxProduct = temporaryProduct;
	}

	return maxProduct;
}

console.log(
	adjacentElementsProduct([
		3,
		6,
		-9,
		-5,
		7,
		7,
		8
	])
);
