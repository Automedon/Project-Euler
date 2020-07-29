/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

const ruler4 = () => {
  const arr = [];
  for (let i = 999; i > 99; i--) {
    for (let j = 999; j > 99; j--) {
      let product = (i * j).toString().split(``);
      if (product.join() === product.reverse().join()) {
        arr.push(parseInt(product.join``));
      }
    }
  }
  return Math.max(...arr);
};

console.log(ruler4()); // 906609
