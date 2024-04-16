/**Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * LINK: https://leetcode.com/problems/longest-common-prefix
 */

const longestCommonPrefix = (strArry) => {
  strArry.sort();
  const first = strArry[0];
  const last = strArry[strArry.length - 1];

  let f = 0,
    l = 0;
  let prefix = "";

  while (f < first.length && l < last.length) {
    if (first[f] === last[l]) {
      prefix += first[f];
      l++;
      f++;
    } else {
      return prefix;
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
