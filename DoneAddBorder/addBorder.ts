function addBorder(picture: string[]): string[] {
	var maxLength: number = maxElementLengthInArray(picture);
	var ArrayObject: ArrayAndLength = fillInAllElements(picture, maxLength);

	var row: string = '';

	for (ArrayObject.maxLength; ArrayObject.maxLength > 0; ArrayObject.maxLength--) {
		row += '*';
	}

	ArrayObject.picture.push(row);
	ArrayObject.picture.unshift(row);

	ArrayObject.picture.forEach((element) => {
		console.log(element);
	});

	return ArrayObject.picture;
}

const maxElementLengthInArray = (picture: string[]): number => {
	var maxElementLength: number = 0;
	picture.forEach((element) => {
		if (element.length >= maxElementLength) maxElementLength = element.length;
	});
	return maxElementLength;
};

const fillInAllElements = (picture: string[], maxLength: number): ArrayAndLength => {
	picture.forEach((value, key) => {
		if (value.length < maxLength) {
			let diff = maxLength - value.length;
			for (diff; diff > 0; diff--) {
				picture[key] = picture[key] + '*';
			}
		}
		picture[key] = '*' + picture[key] + '*';
	});
	maxLength += 2;
	return { picture, maxLength };
};

addBorder([
	'assa',
	'ded'
]);

type ArrayAndLength = {
	picture: string[];
	maxLength: number;
};
