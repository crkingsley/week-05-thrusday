function flatten(arrItems) {
	// Create a new array
	let newArray = []
	// Loop through every item in the array
	arrItems.forEach((arrItem) => {
		if (Array.isArray) {
			newArray = newArray.concat(arrItem)
		}else {
			newArray.push(arrItem)
		}
	})
	return newArray

	// If the item is an array, add its items to the new array
	// If not add the item itself to the new array

	// return the new array
}
sampleArray = [3, [3, 5], 7, 9]
console.log(flatten(sampleArray))