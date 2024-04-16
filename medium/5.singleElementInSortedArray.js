/**
 * You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element
 * which appears exactly once.
 * Return the single element that appears only once.
 * Your solution must run in O(log n) time and O(1) space.
 *
 * LINK: https://leetcode.com/problems/single-element-in-a-sorted-array
 */

const singleNonDuplicate = (nums) => {
  let leftIdx = 0,
    rightIdx = nums.length - 1,
    midIdx = 0,
    leftSize = 0;

  while (leftIdx <= rightIdx) {
    console.log({
      nums: JSON.stringify(nums.slice(leftIdx, rightIdx + 1)),
      leftIdx,
      rightIdx,
    });
    midIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (
      (midIdx - 1 < 0 || nums[midIdx] !== nums[midIdx - 1]) &&
      (midIdx + 1 == nums.length || nums[midIdx + 1] !== nums[midIdx])
    )
      return nums[midIdx];

    leftSize = nums[midIdx - 1] === nums[midIdx] ? midIdx - 1 : midIdx;

    if (leftSize % 2 === 0) {
      leftIdx = midIdx - 1;
    } else {
      rightIdx = midIdx + 1;
    }
  }

  return -1;
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
