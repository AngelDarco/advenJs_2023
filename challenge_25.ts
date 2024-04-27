/* 
Santa Claus 🎅 has already delivered all the gifts to the children but they want to see if they can improve for next year.

The elves want to know how many moves Santa Claus 🛷 made to deliver all the gifts. For this, they give you a map of the city with the location of each child and Santa.

The map is a multiline text string where each character represents a square. The children are represented by numbers from 1 to 9 and Santa Claus by the letter S. The rest of the squares are .

Santa Claus can only move up, down, left, or right, and each move counts as 1 km. In addition, he always starts at the S position and must deliver the gifts in order, from 1 to 9.

const map = `.....1....
..S.......
..........
....3.....
......2...`

const result = travelDistance(map)
console.log(result) // -> 12 km

From S to kid 1: 4 moves
From kid 1 to 2: 5 moves
From kid 2 to 3: 3 moves
Total: 12 moves


const result2 = travelDistance(`..S.1...`)
console.log(result2) // -> 2
*/

function travelDistance(map: string) {
  const arr = map.split("\n");

  const steps = {};
  const jumps = {};
  let i = 0;
  for (; i < arr.length; i++) {
    let ii = 0;
    for (; ii < arr[i].length; ii++) {
      const char = arr[i][ii];
      if (/[S0-9]/.test(char)) {
        steps[char] = ii;
        jumps[char] = i + 1;
      }
    }
  }

  let prevJ = jumps["S"],
    totalJ = 0,
    prevS = steps["S"],
    totalS = 0;

  const l = Object.keys(steps);
  for (let i = 1; i < l.length; i++) {
    const jump = jumps[i];
    const step = steps[i];

    // calc jumps
    prevJ -= jump;
    totalJ += Math.abs(prevJ);
    prevJ = jump;

    // calc steps
    if (step > prevS) {
      totalS += step - prevS;
    } else totalS += prevS - step;
    prevS = step;
  }

  return totalJ + totalS;
}

console.log(travelDistance(`S12....3`)); // 7

console.log(
  travelDistance(`3....1....
..S.......
.........2
..........
......4...`)
); // 31

console.log(
  travelDistance(`.....1....
..S.......
..........
....3.....
......2...`)
); // 12

console.log(travelDistance(`..S.1...`)); // 2
