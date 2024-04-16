/**Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
 * LINK: https://leetcode.com/problems/valid-parentheses
 */

function isValid(s) {
  const stack = [];
  const paramMap = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let ele of s) {
    if (Object.keys(paramMap).includes(ele)) stack.push(ele);
    else {
      const top = stack.pop();
      if (ele !== paramMap[top]) return false;
    }
  }

  return stack.length === 0;
}

console.log(isValid("()[]{}"));
