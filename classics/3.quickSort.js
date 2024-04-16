const quickSort = (arry, low, high) => {
  if (low < high) {
    partitionIdx = partition(arry, low, high);
    quickSort(arry, low, partitionIdx - 1);
    quickSort(arry, partitionIdx + 1, high);
  }

  return arry;
};

const partition = (arry, low, high) => {
  // select pivot
  let pivot = arry[high];
  let i = low - 1;

  // loop from low to high, if current is less than pivot, swap current with value at i
  for (j = low; j < high; j++) {
    console.log({
      i,
      low,
      high,
      j: arry[j],
      pivot,
      arry: JSON.stringify(arry),
    });

    // if current is less than pivot, swap current with value at i
    // increment i before swapping
    if (arry[j] < pivot) {
      i++;
      [arry[i], arry[j]] = [arry[j], arry[i]];
    }
  }

  // place the pivot at the right place
  // swap i+1 and high
  [arry[i + 1], arry[high]] = [arry[high], arry[i + 1]];

  return i + 1;
};

console.log(quickSort([10, 5, 2, 4, 2, 7, 2, 3], 0, 7));
