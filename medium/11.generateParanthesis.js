/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 *
 * LINK: https://leetcode.com/problems/generate-parentheses
 */

const generateParenthesis = (n) => {
  const stack = [];
  const res = [];

  const helper = (openCount, closeCount) => {
    if (openCount === n && closeCount === n) {
      res.push(stack.join(""));
      return;
    }

    if (openCount < n) {
      stack.push("(");
      helper(openCount + 1, closeCount);
      stack.pop();
    }

    if (closeCount < openCount) {
      stack.push(")");
      helper(openCount, closeCount + 1);
      stack.pop();
    }
  };

  helper(0, 0);
  return res;
};

console.log(generateParenthesis(3));
