/**
	* @file insertSort 
	* @desc 插入排序实现
	* @author thalo
	* @date 2020-03-30
	*/

function insertSort(array) {
	for (let i = 1; i < array.length; i += 1) {
		let j = i;
			
		while(j > 0 && array[j - 1] > array[j]) {
			[array[j], array[j - 1]] = [array[j - 1], array[j]];
			j -= 1;
		}	
	}

	return array;
}

module.exports = insertSort;
