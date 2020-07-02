function all(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == false) {
			return false
		}
		return true
	}
}
	let array1 = [true, false, false]
	let array2 = [true, true, true]
	console.log(all(array1))
	console.log(all(array2))
	
	// Loop through every item in the array
	// If the item evaluates to false, return false

	// If the loop ends, return true