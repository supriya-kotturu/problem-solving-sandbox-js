/**
 * Given a string s, return the longest palindromic substring in s.
 *
 * LINK: https://leetcode.com/problems/longest-palindromic-substring
 */

const longestPalindrome = (s) => {
  let maxStr = "",
    currStr = "",
    odd = "",
    even = "";

  for (let idx = 0; idx < s.length; idx++) {
    odd = isPalindromeElseExpand(s, idx, idx);
    even = isPalindromeElseExpand(s, idx, idx + 1);
    currStr = odd.length > even.length ? odd : even;
    maxStr = currStr.length > maxStr.length ? currStr : maxStr;
  }

  return maxStr;
};

const isPalindromeElseExpand = (s, l, r) => {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }
  return s.substring(l + 1, r);
};

console.log(longestPalindrome("babad"));
