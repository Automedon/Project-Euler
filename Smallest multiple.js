/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

const ruler5 = () => {
  let check = Array.from(Array(20), (x, i) => i + 1);
  for (let i = 1; true; i++) {
    if (check.every((v) => i % v === 0)) {
      return i;
    }
  }
};
console.log(ruler5()); // 232792560
