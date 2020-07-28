/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

const ruler3 = () => {
  const check = 600851475143;
  let number = 600851475143;
  const arr = [];
  for (let i = 1; true; i++) {
    if (number % i === 0) {
      arr.push(i);
      number = number / i;
    }
    if (arr.reduce((a, b) => a * b) === check) {
      return arr.reverse()[0];
    }
  }
};

console.log(ruler3()); // 6857
