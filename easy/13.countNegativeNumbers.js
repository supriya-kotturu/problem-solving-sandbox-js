/**
 * Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise,
 * return the number of negative numbers in grid.
 *
 * LINK: https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/description/
 */

const countNegatives = (grid) => {
  const rows = grid.length,
    cols = grid[0].length;
  let row = rows - 1,
    col = 0,
    count = 0;

  while (row >= 0 && col < cols) {
    if (grid[row][col] < 0) {
      row--;
      count += cols - col;
    } else {
      col++;
    }
  }

  return count;
};

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
