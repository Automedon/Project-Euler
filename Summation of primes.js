/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
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

const ruler10 = () => {
  const arr = [];
  for (let i = 2; i < 2000000; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  return arr.reduce((a, b) => a + b);
};

console.log(ruler10()); // 142913828922
