const sortArrayByParity = (nums) => {
  const odd = [];
  const even = [];
  nums.sort((a, b) => a - b);

  for (let idx = 0; idx < nums.length; idx++) {
    idx % 2 === 0 ? even.push(nums[idx]) : odd.push(nums[idx]);
  }

  return [...odd, ...even];
};

console.log(sortArrayByParity([3, 1, 2, 4]));
