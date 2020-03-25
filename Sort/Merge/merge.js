/*
 * @file 归并排序
 * @desc S(n) = n, T(n) = nlogn
 * @author thalo
 * @time 2020/03/25
 */
function merge(leftArray, rightArray) {
  const sortArray = [];
  const lastLeftIndex = leftArray.length - 1;
  const lastRightIndex = rightArray.length - 1;
  let leftPointer = 0;
  let rightPointer = 0;

  while (leftPointer <= lastLeftIndex || rightPointer <= lastRightIndex) {
		// 这里是为了防止某个数组为[]的情况
    const leftPointerValue = leftArray[leftPointer] || Infinity;
    const rightPointerValue = rightArray[rightPointer] || Infinity;

    // 这里<=是为了保证稳定性
    if (leftPointerValue <= rightPointerValue) {
      sortArray.push(leftPointerValue);
      leftPointer += 1;
    } else {
      sortArray.push(rightPointerValue);
      rightPointer += 1;
    }
  }

  return sortArray;
}

function mergeSort(array) {
  const lastIndex = array.length - 1;

  // 数组长度为1
  if (lastIndex === 0) return array;

  const middleIndex = lastIndex >> 1;

  const leftArray = [];
  const rightArray = [];

  let index = 0;
  let tempArray = [];
  while (index <= lastIndex) {
    tempArray = index <= middleIndex ? leftArray : rightArray;
    tempArray.push(array[index]);
    index += 1;
  }

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

module.exports = mergeSort;
