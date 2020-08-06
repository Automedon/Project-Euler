/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

const euler21 = (Limit) => {
  const arr = [];
  //generate arr[1,1,1,...]
  for (let i = 0; i < Limit; i++) arr[i] = 1;
  //finding the sum of all divisors of the numbers
  for (let i = 2; i < Limit / 2 + 1; i++) {
    for (let j = i; j < Limit; j += i) {
      if (j !== i) arr[j] += i;
    }
  }
  let sum = 0;
  //finding the sum of all the amicable numbers
  for (let i = 0; i < arr.length; i++) {
    if (arr[arr[i]] === i && arr[i] !== i) {
      sum += arr[arr[i]];
    }
  }

  return sum;
};

console.log(euler21(10000)); // 31626
