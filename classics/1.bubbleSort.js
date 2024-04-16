const bubbleSort = (arry) => {
  for (let i = 0; i < arry.length; i++) {
    for (let j = 0; j < arry.length - i - 1; j++) {
      if (arry[j + 1] < arry[j]) {
        console.log({ e: arry[j + 1], r: arry[j], a: JSON.stringify(arry) });

        // check if the current element is greater than the next element
        // if it is, swap the two elements
        // if not, move on to the next element
        // repeat this process until the array is sorted
        // return the sorted array
        [arry[j + 1], arry[j]] = [arry[j], arry[j + 1]];
      }
    }
  }

  return arry;
};

console.log(bubbleSort([2, 3, 1, 2, 4, 5, 9, 2, 4, 10]));
