/**
	* @file bubbleSort v1
	* @desc 未经过优化的bubbleSort
	* @author thalo
	* @date 2020-03-29
	*/
function bubbleSort(array) {
	for (let i = 1; i < array.length; i += 1) {
		for (let j = 0; j < array.length - 1; j += 1) {
			if (array[j] > array[j + 1])
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
		}
	}

	return array;
}

module.exports = bubbleSort;
