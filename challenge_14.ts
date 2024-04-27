/* 

*/
function maxGifts(houses: number[]) {
  let jumps = 2,
    start = 0,
    res = 0,
    arr: number[] = [];

  while (start < houses.length) {
    while (jumps < houses.length) {
      let sum = houses[start];
      for (let i = jumps; i < houses.length; i += jumps) {
        if (houses.length === 3) arr.push(houses[1]);
        if (houses[i]) {
          sum += houses[i];
        } else break;
      }
      jumps++;
      arr.push(sum);
    }

    start++;
    jumps = start + 2;
  }

  if (houses.length < 3) arr = houses;
  res = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1]) if (arr[i + 1] > res) res = arr[i + 1];
  }

  return res;
}

// console.log(maxGifts([2, 7, 9, 3, 1])); // 12
// console.log(maxGifts([1, 2, 3, 1])); // 4
// console.log(maxGifts([1, 1, 1])); // 2

// console.log(maxGifts([0, 0, 0, 0, 1])); // 1

console.log(maxGifts([1, 3, 2])); // 3
