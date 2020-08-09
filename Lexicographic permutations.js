/*
A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

const euler24 = (num) => {
  // factorial number system
  const fac = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
  // our numbers for permutation
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // our string
  let res = "";

  num--;
  for (let i = arr.length - 1; i >= 0; i--) {
    //base-converter from base 10 to factorial base
    let t = (num / fac[i]) | 0;
    num %= fac[i];
    //add number to str
    res += arr[t];
    //delete this number from arr
    arr.splice(t, 1);
  }
  return res;
};

console.log(euler24(1e6)); // 2783915460
