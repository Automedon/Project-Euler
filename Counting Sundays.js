/*
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.

A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

const ruler19 = () => {
  let sundays = 0;
  for (let y = 1901; y <= 2000; y++) {
    for (let month = 0; month < 12; month++) {
      if (new Date(y, month + 1, 0).getDay() === 6) sundays++;
    }
  }
  return sundays;
};

console.log(ruler19()); // 171
