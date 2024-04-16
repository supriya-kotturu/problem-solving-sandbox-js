const mergeSort = (arry) => {
  if (arry.length <= 1) return arry;

  const mid = Math.floor(arry.length / 2);
  const leftArry = arry.slice(0, mid);
  const rightArry = arry.slice(mid);

  mergeSort(leftArry);
  mergeSort(rightArry);

  return merge(arry, leftArry, rightArry);
};

// merging two sorted arrays
const merge = (arr, leftArry, rightArry) => {
  let leftIdx = 0,
    rightIdx = 0,
    idx = 0;

  while (leftIdx < leftArry.length && rightIdx < rightArry.length) {
    arr[idx] = Math.min(leftArry[leftIdx], rightArry[rightIdx]);
    leftArry[leftIdx] < rightArry[rightIdx] ? leftIdx++ : rightIdx++;
    idx++;
  }

  while (leftIdx < leftArry.length) {
    arr[idx] = leftArry[leftIdx];
    leftIdx++;
    idx++;
  }

  while (rightIdx < rightArry.length) {
    arr[idx] = rightArry[rightIdx];
    rightIdx++;
    idx++;
  }

  console.log({
    l: JSON.stringify(leftArry),
    r: JSON.stringify(rightArry),
    arr: JSON.stringify(arr),
  });

  return arr;
};

console.log(mergeSort([0, 0, 0, 0, 1, 2, 2, 2, 1, 2]));
