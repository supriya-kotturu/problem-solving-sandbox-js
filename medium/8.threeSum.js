/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and
 * nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.
 *
 * LINK: https://leetcode.com/problems/3sum
 */

const threeSum = (nums) => {
  const res = [];
  nums.sort((a, b) => a - b);

  for (let idx = 0; idx < nums.length; idx++) {
    if (idx > 0 && nums[idx] == nums[idx - 1]) continue;
    findTriplets(nums, idx + 1, -nums[idx], res);
  }

  return res;
};

const findTriplets = (nums, left, target, res) => {
  let right = nums.length - 1,
    sum = 0;

  while (left < right) {
    sum = nums[left] + nums[right];

    if (sum < target) left++;
    else if (sum > target) right--;
    else {
      res.push([nums[left], nums[right], -target]);
      left++;
      right--;

      while (left < right && nums[left] == nums[left - 1]) left++;
      while (left < right && nums[right] == nums[right + 1]) right--;
    }
  }
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
