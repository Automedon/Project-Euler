/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/

const ruler16 = () => {
  return BigInt(Math.pow(2, 1000)).toString().split``.reduce(
    (a, b) => a + parseInt(b),
    0
  );
};

console.log(ruler16()); // 1366
