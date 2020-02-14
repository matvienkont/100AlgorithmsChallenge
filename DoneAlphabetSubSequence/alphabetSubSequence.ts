function alphabetSubsequence(s: string): boolean {
	var indicator: number = 0;

	for (let i: number = 0; i < s.length - 1; i++) {
		indicator = 0;
		for (let j: number = 0; j < s.length - 1; j++)
			if (s[i] == s[j]) {
				indicator++;
			}
		if (indicator > 1) return false;
	}
	return true;
}

console.log(alphabetSubsequence('zab'));
console.log(alphabetSubsequence('effg'));
console.log(alphabetSubsequence('cdce'));
console.log(alphabetSubsequence('ace'));
console.log(alphabetSubsequence('bxz'));
