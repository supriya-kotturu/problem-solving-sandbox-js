/**
 * A conveyor belt has packages that must be shipped from one port to another within days days.
 * The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt
 * (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.
 * Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within d days.
 *
 * LINK: https://leetcode.com/problems/capacity-to-ship-packages-within-d-days
 */

const shipWithinDays = (weights, days) => {
  let low = Math.max(...weights);
  let high = weights.reduce((a, b) => a + b);
  let minCapacity = Infinity;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (getShipmentDays(weights, mid) <= days) {
      minCapacity = Math.min(minCapacity, mid);
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return minCapacity;
};

const getShipmentDays = (weights, capacity) => {
  let ships = 1,
    currCapacity = capacity;

  for (let weight of weights) {
    if (currCapacity - weight < 0) {
      ships++;
      currCapacity = capacity;
    }
    currCapacity -= weight;
  }

  return ships;
};

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
