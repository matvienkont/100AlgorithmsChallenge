function almostIncreasingSequence(sequence: number[]): boolean {
	var arrayLenth: number = sequence.length;
	var almostIncSeq: number = 0;

	for (let i: number = 0; i < arrayLenth - 1; i++) {
		console.log(i);
		if (sequence[i] >= sequence[i + 1]) almostIncSeq++;
	}

	return almostIncSeq === 1 ? true : false;
}

console.log(
	almostIncreasingSequence([
		1,
		2,
		1
	])
);
console.log(
	almostIncreasingSequence([
		5,
		6,
		5
	])
);
