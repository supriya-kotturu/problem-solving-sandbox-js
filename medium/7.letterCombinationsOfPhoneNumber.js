/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
 * Return the answer in any order.
 * A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 *
 * LINK: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 */

const letterCombinations = (digits) => {
  const digitToLetterMap = {
    0: "",
    1: "",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const res = [];

  const backtrack = (idx, currStr) => {
    if (currStr.length === digits.length) {
      res.push(currStr);
      return;
    }

    const letters = digitToLetterMap[digits[idx]];

    for (let char of letters) {
      backtrack(idx + 1, currStr + char);
    }
  };

  if (digits.length) backtrack(0, "");

  return res;
};

console.log(letterCombinations("23"));
