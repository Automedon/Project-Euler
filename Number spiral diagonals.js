/*
Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
*/

const euler28 = (n) => {
  // create array with numbers 1 to 1002001
  const numbers = Array.from(Array(n * n), (x, i) => n * n - i);
  // create array for filling in
  const arr = Array.from(Array(n), () => []).map((v) =>
    Array.from(Array(n), () => "x")
  );
  // array of directions
  const dir = ["left", "down", "right", "top"];
  // switcher for directions
  let k = 0;
  // horizontal
  let h = 0;
  // vertical
  let v = n - 1;
  //  we need to fill the first number (most right and top)
  arr[h][v] = numbers[0];
  // now we will fill our arr with actual numbers changing direction
  for (let i = 1; i < numbers.length; i++) {
    let d = dir[k % dir.length];
    if (d === "left") {
      v--;
      if (!arr[h][v] || arr[h][v] !== "x") {
        v++;
        h++;
        k++;
      }
    }
    if (d === "down") {
      h++;
      if (!arr[h] || arr[h][v] !== "x") {
        h--;
        v++;
        k++;
      }
    }
    if (d === "right") {
      v++;
      if (!arr[h][v] || arr[h][v] !== "x") {
        v--;
        h--;
        k++;
      }
    }
    if (d === "top") {
      h--;
      if (!arr[h] || arr[h][v] !== "x") {
        h++;
        v--;
        k++;
      }
    }
    arr[h][v] = numbers[i];
  }
  let sum = 0;
  let j = 0;
  let z = arr.length - 1;
  // here we will sum our diagonals
  for (let i = 0; i < arr.length; i++, j++, z--) {
    sum += arr[i][j];
    sum += arr[i][z];
  }
  // we need to subtract 1 because we crossed the center twice
  return sum - 1;
};

console.log(euler28(1001)); // 669171001
