function arrayPreviousLess(items: number[]): number[] {
	let arrLen: number = items.length;
	let newItems: number[] = [];

	for (let i: number = 1; i < arrLen; i++) {
		var compareValue: number = items[i - 1];

		if (compareValue >= items[i]) {
			newItems.push(-1);
		} else {
			if (!isNaN(compareValue)) {
				newItems.push(compareValue);
			}
		}
	}

	newItems.unshift(-1);
	return newItems;
}

console.log(arrayPreviousLess([ 3, 5, 6, 2, 4, 5 ]));
