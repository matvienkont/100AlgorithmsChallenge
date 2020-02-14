const add = (param1: number, param2: number): number => {
	return param1 + param2;
};

const add2 = (...param1: number[]): number => {
	return param1.reduce((accumulator: number = 0, value: number): number => {
		console.log(accumulator);
		return accumulator + value;
	});
};
console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 3));

console.log(add2(5, 7, 8, 23, 23, 7, 34, 12));
