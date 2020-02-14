

function areSimilar(a: number[], b: number[]): boolean {
   quickSort(a);
   quickSort(b);

   if(a.length!=b.length)
   return false;

   for(let i = 0; i<a.length; i++)
   if(a[i]!=b[i])
   return false
   
   return true;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));

//Quick sort

function quickSort (array: number[]): number[] {
	divisionAlgorithm(array, 0, array.length - 1);
	return array;
};

function divisionAlgorithm (array: number[], left: number, right: number): number[] {
	var pivot: number = Math.floor((left + right) / 2);
	var arrayLength: number = right;

	swap(array, pivot, arrayLength);
	pivot = arrayLength;

	let i: number = left;
	let k: number = right - 1;
	let leftBoundaryIndex: number = 0;
	let rightBoundaryIndex: number = 0;

	while (i <= k) {
		/*
	go through array to find elements array[i] greater-equal than array[pivot]
*/
		for (i; i <= pivot; i++) {
			if (array[i] >= array[pivot]) {
				leftBoundaryIndex = i;
				break;
			}
		}

		/*
	go through array to find out if right boundary is less than left boundary or find elements array[k] < array[pivot]
*/
		for (k; k >= 0; k--) {
			if (k < i) {
				if (left == 2 && right == 5) {
				}
				rightBoundaryIndex = i;
				break;
			} else if (array[k] < array[pivot]) {
				rightBoundaryIndex = k;
				break;
			}
		}
		/*
	if left boundary are equal -> swap values under indeces left boundary and pivot
	normally, you swap elements - one of them is lesser than the value under pivot index, the other is greater
*/

		if (leftBoundaryIndex == rightBoundaryIndex) {
			swap(array, leftBoundaryIndex, pivot);
			pivot = leftBoundaryIndex;
		} else if (array[leftBoundaryIndex] > array[rightBoundaryIndex]) {
			swap(array, leftBoundaryIndex, rightBoundaryIndex);
		}
	}

	/*
	sort all the elements that are lesser than array[pivot]
*/
	if (pivot - 1 > left) divisionAlgorithm(array, left, pivot - 1);
	/*
	sort all the elements that are bigger than array[pivot]
*/
	if (pivot < right) divisionAlgorithm(array, pivot + 1, right);

	return array;
};

/*
	swap function a,b = b,a 
*/

function swap (array: number[], i: number, j: number): void {
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
};
