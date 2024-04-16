/**
 * Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
 * That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
 * Return the answer in an array.
 *
 * LINK : https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number
 */

const smallerNumbersThanCurrent = (nums) => {
  const minNumsArry = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        minNumsArry[i]++;
      }
    }
  }

  return minNumsArry;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
