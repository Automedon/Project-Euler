/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

const ruler9 = () => {
  for (let i = 1; i < 1000; i++) {
    for (let j = 1; j < i; j++) {
      for (let k = 1; k < j; k++) {
        if (i + j + k === 1000) {
          if (i * i === j * j + k * k) {
            return i * j * k;
          }
        }
      }
    }
  }
};

console.log(ruler9()); // 31875000
