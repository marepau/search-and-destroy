'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	const mid = Math.ceil((array.length)/2)
	const midVal = array[mid]
	if(midVal === target){
		return true
	}
	if (target <= midVal){
		const smallArray = array.slice(0, mid)
		while(smallArray.length > 1){
		return binarySearch(smallArray, target)
		}
		if(smallArray[0] === target){
			return true
		}
		else return false
	}
	else {
		const bigArray = array.slice(mid+1, array.length)
		while(bigArray.length > 1){
			return binarySearch(bigArray, target)
		}
		if(bigArray[0] === target){
			return true
		}
		else return false
	}
}
/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
