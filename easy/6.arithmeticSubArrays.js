/**A sequence of numbers is called arithmetic if it consists of at least two elements, and the difference between every two consecutive
 * elements is the same. More formally, a sequence s is arithmetic if and only if s[i+1] - s[i] == s[1] - s[0] for all valid i.
 * For example, these are arithmetic sequences:
 * 1, 3, 5, 7, 9
 * 7, 7, 7, 7
 * 3, -1, -5, -9
 * The following sequence is not arithmetic:
 * 1, 1, 2, 5, 7
 *
 * You are given an array of n integers, nums, and two arrays of m integers each, l and r, representing the m range queries,
 * where the ith query is the range [l[i], r[i]]. All the arrays are 0-indexed.
 * Return a list of boolean elements answer, where answer[i] is true if the subarray nums[l[i]], nums[l[i]+1], ... , nums[r[i]]
 * can be rearranged to form an arithmetic sequence, and false otherwise.
 *
 * LINK: https://leetcode.com/problems/arithmetic-subarrays
 */

const isArithmetic = (arr) => {
  arr.sort((a, b) => a - b);
  const diff = arr[1] - arr[0];

  for (let idx = 1; idx < arr.length; idx++) {
    if (arr[idx] - arr[idx - 1] !== diff) {
      return false;
    }
  }
  return true;
};

const checkArithmeticSubarrays = (nums, l, r) => {
  const checkArithmeticArry = new Array(l.length).fill(false);

  for (let idx = 0; idx < l.length; idx++) {
    if (isArithmetic(nums.slice(l[idx], r[idx] + 1))) {
      checkArithmeticArry[idx] = true;
    }
  }

  return checkArithmeticArry;
};

console.log(checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5]));
