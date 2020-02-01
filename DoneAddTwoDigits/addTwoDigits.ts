function addTwoDigits(n: any): number {
	var stringified: string = n.toString();
	return parseInt(stringified[0]) + parseInt(stringified[1]);
}

console.log(addTwoDigits(51));
