/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down,
there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
*/

const ruler15 = (n) => {
  let c = 1;
  for (let i = 1; i <= n; i++) {
    c = (c * (n + i)) / i;
  }
  return c;
};

console.log(ruler15(20)); // 137846528820
