/*
 * @file 原地归并
 * @desc S(n) = 1 T(n) = nlogn
 * @author thalo
 * @time 2020/03/25
 */

function reserver(array, startIndex, endIndex) {
  while (startIndex < endIndex) {
    [array[startIndex], array[endIndex]] = [array[endIndex], array[startIndex]];

    startIndex += 1;
    endIndex -= 1;
  }
}

function arrayShift(array, startIndex, middleIndex, endIndex) {
  reserver(array, startIndex, middleIndex);
  reserver(array, middleIndex + 1, endIndex);
  reserver(array, startIndex, endIndex);
}

function merge(targetArray, startIndex, middleIndex, endIndex) {
  if (startIndex > middleIndex || middleIndex >= endIndex) return;

  const rightMin = targetArray[middleIndex + 1];

  let i = startIndex,
    j = middleIndex + 1,
    iv = targetArray[i];

  // 因为是稳定排序所以这里有=
  while (iv <= rightMin && i <= middleIndex) {
    i += 1;
    iv = targetArray[i];
  }

  while (targetArray[j] < iv && j <= endIndex) {
    j += 1;
  }

  arrayShift(targetArray, i, middleIndex, j - 1);

	// j - middleIndex为
  merge(targetArray, i + j - middleIndex - 1, j - 1, endIndex);

  return targetArray;
}

function mergeSort(
  targetArray,
  startIndex = 0,
  endIndex = targetArray.length - 1
) {
  if (endIndex === startIndex) return;

  const len = endIndex - startIndex;
  const middleIndex = startIndex + (len >> 1);

  mergeSort(targetArray, startIndex, middleIndex);
  mergeSort(targetArray, middleIndex + 1, endIndex);

  merge(targetArray, startIndex, middleIndex, endIndex);

  return targetArray;
}

module.exports = mergeSort;
