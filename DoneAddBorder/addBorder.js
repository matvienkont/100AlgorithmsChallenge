function addBorder(picture) {
    var maxLength = maxElementLengthInArray(picture);
    var ArrayObject = fillInAllElements(picture, maxLength);
    var row = '';
    for (ArrayObject.maxLength; ArrayObject.maxLength > 0; ArrayObject.maxLength--) {
        row += '*';
    }
    ArrayObject.picture.push(row);
    ArrayObject.picture.unshift(row);
    ArrayObject.picture.forEach(function (element) {
        console.log(element);
    });
    return ArrayObject.picture;
}
var maxElementLengthInArray = function (picture) {
    var maxElementLength = 0;
    picture.forEach(function (element) {
        if (element.length >= maxElementLength)
            maxElementLength = element.length;
    });
    return maxElementLength;
};
var fillInAllElements = function (picture, maxLength) {
    picture.forEach(function (value, key) {
        if (value.length < maxLength) {
            var diff = maxLength - value.length;
            for (diff; diff > 0; diff--) {
                picture[key] = picture[key] + '*';
            }
        }
        picture[key] = '*' + picture[key] + '*';
    });
    maxLength += 2;
    return { picture: picture, maxLength: maxLength };
};
addBorder([
    'assa',
    'ded'
]);
