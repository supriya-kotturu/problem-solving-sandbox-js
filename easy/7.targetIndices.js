/**
 * You are given a 0-indexed integer array nums and a target element target.
 * A target index is an index i such that nums[i] == target.
 * Return a list of the target indices of nums after sorting nums in non-decreasing order.
 * If there are no target indices, return an empty list. The returned list must be sorted in increasing order.
 *
 * LINK: https://leetcode.com/problems/find-target-indices-after-sorting-array
 */

const targetIndices = (nums, target) => {
  nums.sort((a, b) => a - b);
  const res = [];

  for (let idx = 0; idx < nums.length && nums[idx] <= target; idx++) {
    if (nums[idx] === target) res.push(idx);
  }

  return res;
};

console.log(targetIndices([1, 2, 5, 2, 3], 2));
