function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
	var yourWeakest = yourLeft < yourRight ? yourLeft : yourRight;
	var yourStrongest = yourLeft < yourRight ? yourRight : yourLeft;
	var friendsWeakest = friendsLeft < friendsRight ? friendsLeft : friendsRight;
	var friendsStrongest = friendsLeft < friendsRight ? friendsRight : friendsLeft;

	return yourWeakest == friendsWeakest && yourStrongest == friendsStrongest;
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
