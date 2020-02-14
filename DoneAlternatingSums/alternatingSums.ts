function alternatingSums(a: number[]): number[] {
	var team1: number = 0;
	var team2: number = 0;

	a.forEach((value, index) => {
		if ((index + 1) % 2 == 1) team1 += value;
		else team2 += value;
	});
	return [ team1, team2 ];
}

console.log(alternatingSums([ 50, 65, 20, 15, 70 ]));
