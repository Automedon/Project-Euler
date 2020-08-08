/*
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/

const euler23 = () => {
  const deficient = [];
  let sumAll = 0;
  //finding all deficient numbers and the sum of all numbers from 1-28123
  for (let i = 0; i <= 28123; i++) {
    sumAll += i;
    let def = 0;
    for (let j = Math.round(i / 2); j > 1; j--) {
      if (i % j === 0) {
        def += j;
      }
    }
    if (def > i) deficient.push(i);
  }
  // set for controlling already have been seen numbers
  const set = new Set();
  for (let i = 0; i < deficient.length; i++) {
    for (let j = i; j < deficient.length; j++) {
      if (deficient[i] + deficient[j] <= 28123) {
        if (!set.has(deficient[i] + deficient[j])) {
          set.add(deficient[i] + deficient[j]);
          // subtraction the abundant number from sumAll
          sumAll -= deficient[i] + deficient[j];
        }
      } else {
        break;
      }
    }
  }
  return sumAll;
};

console.log(euler23()); // 4179871
