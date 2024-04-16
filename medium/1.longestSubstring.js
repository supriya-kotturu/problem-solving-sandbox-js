const lengthOfLongestSubstring = (s) => {
  let uniqSet = new Set();
  let left = 0,
    maxLength = 0;

  for (let idx = 0; idx < s.length; idx++) {
    while (uniqSet.has(s[idx])) {
      uniqSet.delete(s[left]);
      left++;
    }
    uniqSet.add(s[idx]);
    maxLength = Math.max(maxLength, uniqSet.size);
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
