function dropRight(arr, numberOfItemsToDrop) {
	// if n is larger than array length return []
	if (numberOfItemsToDrop >= arr.length) {
		return arr = []
	}
	// Use n to count in from the end to get the index
	let itemsToBeDropped = (arr.length - numberOfItemsToDrop)

	// return a slice of the array using the index as the end
	return arr.slice(0, itemsToBeDropped)
}


n = 2
sampleArr = [2, 3, 6, 7, 9]
console.log(dropRight(sampleArr, n))