/**
 * There is an integer array nums sorted in ascending order (with distinct values).
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length)
 * such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
 *
 * For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 * Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums,
 * or -1 if it is not in nums.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * LINK: https://leetcode.com/problems/search-in-rotated-sorted-array
 */

const searchInRotatedArray = (nums, target) => {
  let leftIdx = 0,
    rightIdx = nums.length - 1,
    midIdx = 0,
    left = 0,
    right = 0,
    mid = 0;

  while (leftIdx <= rightIdx) {
    midIdx = Math.floor((leftIdx + rightIdx) / 2);

    left = nums[leftIdx];
    right = nums[rightIdx];
    mid = nums[midIdx];

    if (mid === target) return midIdx;

    if (left <= mid) {
      if (target > mid || target < left) leftIdx = midIdx + 1;
      else rightIdx = midIdx - 1;
    } else {
      if (target < mid || target > right) rightIdx = midIdx - 1;
      else leftIdx = midIdx + 1;
    }
  }

  return -1;
};

console.log(searchInRotatedArray([4, 5, 6, 7, 0, 1, 2], 0));
console.log(searchInRotatedArray([4, 5, 6, 7, 9, 12], 3));
console.log(searchInRotatedArray([7, 8, 9, 1, 2, 3, 4], 8));
