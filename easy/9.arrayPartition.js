/**
 * Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn)
 * such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
 *
 * LINK: https://leetcode.com/problems/array-partition
 */

const arrayPartition = (nums) => {
  nums.sort((a, b) => a - b);
  return nums.reduce((sum, num, idx) => (sum += idx % 2 === 0 ? num : 0), 0);
};

console.log(arrayPartition([1, 4, 3, 2]));
