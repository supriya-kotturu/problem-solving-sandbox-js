/**Given an array of integers arr, sort the array by performing a series of pancake flips.
 * In one pancake flip we do the following steps:
 * Choose an integer k where 1 <= k <= arr.length.
 * Reverse the sub-array arr[0...k-1] (0-indexed).
 * For example, if arr = [3,2,1,4] and we performed a pancake flip choosing k = 3, we reverse the sub-array [3,2,1],
 * so arr = [1,2,3,4] after the pancake flip at k = 3.
 * Return an array of the k-values corresponding to a sequence of pancake flips that sort arr. Any valid answer
 * that sorts the array within 10 * arr.length flips will be judged as correct.
 *
 * LINK: https://leetcode.com/problems/pancake-sorting
 */
const pancakeSort = (arr) => {
  const res = [];
  let maxIdx = 0;

  while (arr.length) {
    maxIdx = arr.indexOf(arr.length);
    res.push(maxIdx + 1);
    flip(arr, maxIdx);
    res.push(arr.length);
    flip(arr, arr.length - 1);
    arr.pop();
  }

  return res;
};

const flip = (arr, end) => {
  start = 0;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};

console.log(pancakeSort([3, 2, 4, 1]));
