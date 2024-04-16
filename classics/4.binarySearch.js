/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search
 * target in nums. If target exists, then return its index. Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * LINK: https://leetcode.com/problems/binary-search
 */

const search = (nums, target) => {
  let leftIdx = 0,
    rightIdx = nums.length - 1,
    midIdx = 0,
    mid = 0;

  while (leftIdx <= rightIdx) {
    midIdx = Math.floor((leftIdx + rightIdx) / 2);
    mid = nums[midIdx];

    if (mid === target) return midIdx;
    if (mid < target) leftIdx = midIdx + 1;
    else rightIdx = midIdx - 1;
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
