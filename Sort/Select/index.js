/**
 * @file selectSort 
 * @desc 选择排序
 * @author thalo
 * @date 2020-03-30
 */

function selectSort(array) {
	for (let i = 0; i < array.length; i += 1) {
		let minValue = array[i],
			minValueIndex = i;

		for (let j = i + 1; j < array.length; j += 1) {
			if (minValue > array[j]) {
				minValue = array[j];
				minValueIndex = i;
			}
		}

		[array[minValueIndex], array[i]] = [array[i], array[minValueIndex]];
	}

	return array;
}

module.exports = selectSort;
