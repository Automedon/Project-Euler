/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

const isPrime = (number) => {
  const sqrt = Math.sqrt(number);
  for (let i = 2; i <= sqrt; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const ruler7 = () => {
  const arr = [];
  let i = 2;
  while (arr.length !== 10001) {
    if (isPrime(i)) {
      arr.push(i);
    }
    i++;
  }
  return arr.reverse()[0];
};

console.log(ruler7()); // 104743
