/**
	* @file bubbleSort v2
	* @desc 优化后的冒泡排序 - 对比v1
	* @author thalo
	* @date 2020-03-29
	*/
function bubbleSort(array) {
  let needSortCount = array.length;

  while (needSortCount > 1) {
		// 这里是为了处理有序数组,退出循环
    let lastIndex = 0;    

		for (let j = 0; j < needSortCount - 1; j += 1) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        lastIndex = j;
      }
    }

    needSortCount = lastIndex + 1;
  }

  return array;
}

module.exports = bubbleSort;
