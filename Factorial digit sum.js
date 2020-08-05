/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

const ruler20 = () => {
  let factorial100 = BigInt(1);
  for (let i = 1; i <= 100; i++) {
    factorial100 *= BigInt(i);
  }
  return factorial100
    .toString()
    .split("")
    .reduce((a, b) => a + b * 1, 0);
};

console.log(ruler20()); // 648
