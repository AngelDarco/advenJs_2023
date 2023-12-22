/* 
In Santa's workshop, the elves have a gift list they wish to make and a limited set of materials.

Gifts are strings of text and materials are characters. Your task is to write a function that, given a list of gifts and the available materials, returns a list of the gifts that can be made.

A gift can be made if we have all the necessary materials to make it.

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []
*/

function manufacture(gifts: string[], materials: string) {
  const result: string[] = [];

  for (let i = 0; i < gifts.length; i++) {
    const verify: number[] = [];

    for (let ii = 0; ii < gifts[i].length; ii++) {
      if (materials.includes(gifts[i][ii])) {
        verify.push(ii);
      }
    }
    if (verify.length === gifts[i].length) {
      result.push(gifts[i]);
    }
  }
  return result;
}

const gifts = ["tren", "oso", "pelota"];
const materials = "tronesa";

console.log(manufacture(gifts, materials)); // ["tren", "oso"]

const gifts2 = ["juego", "puzzle"];
const materials2 = "jlepuz";

console.log(manufacture(gifts2, materials2)); // ["puzzle"]

const gifts3 = ["libro", "ps5"];
const materials3 = "psli";

console.log(manufacture(gifts3, materials3)); // []
