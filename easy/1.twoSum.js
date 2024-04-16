const twoSums = (nums, target) => {
  const diffIdxMap = new Map();
  let diff = 0;

  for (let idx = 0; idx < nums.length; idx++) {
    diff = target - nums[idx];
    if (diffIdxMap.has(diff)) {
      return [diffIdxMap.get(diff), idx];
    }
    diffIdxMap.set(nums[idx], idx);
  }

  return [-1, -1];
};

console.log(twoSums([2, 7, 11, 15], 9));
