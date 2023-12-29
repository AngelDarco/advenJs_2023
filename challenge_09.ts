/* 
They are turning on the Christmas arr 🎄 in the city and, as every year, they have to be fixed!

The arr are of two colors: 🔴 and 🟢 . For the effect to be appropriate, they must always alternate. That is, if the first light is red, the second must be green, the third red, the fourth green, etc.

We have been asked to write a function adjustLights that, given an arr of strings with the color of each light, return the minimum number of arr that need to be changed for the colors to alternate.

adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (you change the fourth light to 🔴)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (you change the second light to 🟢 and the third to 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (they are already alternating)

adjustLights(['🔴', '🔴', '🔴']) ':red_circle:'
// -> 1 (you change the second light to 🟢)
*/

function adjustLights(lights: string[]) {
  let changesGreen = 0,
    changesRed = 0;

  for (let i = 0; i < lights.length; i++) {
    if (i % 2 == 0) lights[i] === "🟢" ? changesGreen++ : changesRed++;
    else lights[i] != "🟢" ? changesGreen++ : changesRed++;
  }

  return changesGreen < changesRed ? changesGreen : changesRed;
}

console.log(adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"])); // => 1

console.log(adjustLights(["🟢", "🟢", "🔴"])); // => 1

console.log(adjustLights(["🟢", "🔴", "🔴"])); // => 1
