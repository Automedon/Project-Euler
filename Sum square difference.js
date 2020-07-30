/*
The sum of the squares of the first ten natural numbers is,
  1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,
  (1 + 2 + ... + 10)^2 = 55^2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .
  3025 - 385 = 2640
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

const ruler6 = () => {
  const arr = Array.from(Array(100), (x, i) => i + 1);
  const sumOfTheSquares = arr.reduce((a, b) => a + b * b, 0);
  const squareOfTheSum = Math.pow(
    arr.reduce((a, b) => a + b, 0),
    2
  );
  return squareOfTheSum - sumOfTheSquares;
};
console.log(ruler6()); // 25164150
