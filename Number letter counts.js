/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are
3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many
letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23
letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

const ruler17 = () => {
  const dict = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
    1000: "thousand",
  };
  const arr = [];
  const keys = Object.keys(dict).reverse();
  for (let i = 1; i <= 1000; i++) {
    //our str
    let str = "";
    //copy number (we dont want to change i our bcs of loop)
    let number = i;
    //check how much thousands (actually here is only one)
    let thousands = Math.floor(number / 1000);
    if (thousands) {
      str += dict[thousands] + "thousand";
      number -= thousands * 1000;
    }
    //check how much hundreds
    let hundreds = Math.floor(number / 100);
    if (hundreds) {
      str += dict[hundreds] + "hundred";
      number -= hundreds * 100;
    }
    //adding `and` because of requirement in the description
    if (hundreds && number !== 0) {
      str += "and";
    }
    //extract all numbers below 100
    for (let j = 0; j < keys.length; j++) {
      const value = keys[j];
      if (number >= value) {
        str += dict[value];
        number -= value;
        j--;
      }
    }
    //actually we can just number of lengths, but I like to see, that u can get a real words if want
    //so we push a whole word
    arr.push(str);
  }
  //just counting, easy
  return arr.reduce((a, b) => a + b.length, 0);
};

console.log(ruler17()); // 21124
