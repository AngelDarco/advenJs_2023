/* 
The elves are very busy in Santa Claus' workshop organizing gifts 🎁 for Christmas Eve 🎄.

The input format is special, as it indicates the number of gifts and the type of gift with letters from a to z. For example, '66a11b' means 66 a gifts and 11 b gifts.

The elves have a special system for organizing the gifts:

Every 10 gifts of the same type are packed in a box, represultented by {x}. For example, 20 type a gifts are packed in two boxes like this: {a}{a}.
Every 5 boxes are stacked on a pallet, represultented by [x].

For example, 10 a boxes are stacked on 2 pallets in this way: [a][a]
Any additional gift is placed in a bag, represultented by () and all of them are placed inside. For example, 4 b gifts are placed in a bag like this (bbbb)
The gifts are then placed in the following order: pallets, boxes and bags. And the gifts appear in the same order as the input string.

Your task is to write a function organizeGifts that takes a string of gifts as an argument and returns a string represultenting the warehouse.

const resultult1 = organizeGifts('76a11b')
console.log(resultult1)
// `[a]{a}{a}(aaaaaa){b}(b)`

/* Explanation:

  76a: 76 gifts type 'a' would be packed in 7 boxes and 6 gifts would be left, resultulting in 1 pallet [a] (for the types 5 boxes), 2 loose boxes {a}{a} and a bag with 6 gifts (aaaaaa)

  11b: 11 gifts type 'b' would be packed in 1 box and 1 gift would be left, resultulting in 1 loose box {b} and a bag with 1 gift (b)
*/

function organizeGifts(gifts: string) {
  const regx = /(\d+)([a-z])/g;
  const types = gifts.match(regx) || "";
  let result = "";
  if (types.length === 1) return packageGifts(types[0]);
  for (let i = 0; i < types.length; i++) {
    result += packageGifts(types[i]);
  }

  return result;
  function packageGifts(arr: string) {
    let symbol = "";
    let cuantity: string | number = "";
    let result = "";
    for (let i = 0; i < arr.length; i++)
      Number.isInteger(+arr[i]) ? (cuantity += arr[i]) : (symbol += arr[+i]);

    cuantity = +cuantity;

    let bag = "";
    while (cuantity > 0) {
      if (cuantity >= 50) {
        result += `[${symbol}]`;
        cuantity -= 50;
      } else if (cuantity >= 10) {
        result += `{${symbol}}`;
        cuantity -= 10;
      } else {
        bag += symbol;
        if (bag !== "" && cuantity === 1) result += `(${bag})`;
        cuantity -= 1;
      }
    }
    return result;
  }
}

console.log(organizeGifts("70b120a4c")); // [b]{b}{b}[a][a]{a}{a}(cccc)
// console.log(organizeGifts("76a11b")); //[a]{a}{a}(aaaaaa){b}(b)
// console.log(organizeGifts("20a")); //{a}{a}
// console.log(organizeGifts("9c")); //(ccccccccc)
