/**There are 3n piles of coins of varying size, you and your friends will take piles of coins as follows:
 * In each step, you will choose any 3 piles of coins (not necessarily consecutive).
 * Of your choice, Alice will pick the pile with the maximum number of coins.
 * You will pick the next pile with the maximum number of coins.
 * Your friend Bob will pick the last pile.
 * Repeat until there are no more piles of coins.
 * Given an array of integers piles where piles[i] is the number of coins in the ith pile.
 *
 * Return the maximum number of coins that you can have.
 *
 * LINK: https://leetcode.com/problems/maximum-number-of-coins-you-can-get
 */

const maxCoins = (pile) => {
  pile.sort((a, b) => a - b);

  const len = pile.length;
  let myPick = 0;
  let j = 0;

  for (let idx = len - 2; idx > 0; idx -= 2) {
    if (j === Math.floor(len / 3)) {
      return myPick;
    }
    myPick += pile[idx];
    j++;
  }

  return myPick;
};

console.log(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4]));
