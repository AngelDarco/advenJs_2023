/* 
In the North Pole they still use paper photocopiers. Elves use them to copy the letters that children send to Santa, so they can send them to all the gift departments.

However, they are very old and do not work very well. Every time they make a copy, the quality of the copy slightly decreases, a phenomenon known as generation loss.

You need to detect if a letter is a copy of another. The letters are very long and you can't read them, but you can compare them with an algorithm.

There is a high probability that a character will degrade with each copy (it doesn't always happen!). And when it happens, the rule it follows is:

The characters from A to Z degrade from capital letters to lower-case letters (A-Z ⇒ a-z)
Letters degrade in a series of characters in this order: a-z ⇒ # ⇒ + ⇒ : ⇒ . ⇒
Once the letters have degraded into the symbols, they can continue to degrade.
Note that the last one is a blank space, not an empty character.
Characters that are not letters (like digits) do not degrade.
Knowing this and receiving two letters. The supposed original and the copy. You must determine if the copy is a copy of the other.

checkIsValidCopy(
  'Santa Claus is coming',
  'sa#ta Cl#us i+ comin#'
) // true
checkIsValidCopy(
  's#nta Cla#s is coming',
  'p#nt: cla#s #s c+min#'
) // false (due to the initial p)
checkIsValidCopy('Santa Claus', 's#+:. c:. s') // true
checkIsValidCopy('Santa Claus', 's#+:.#c:. s') // false (there is a # where it shouldn't be)
To understand how photocopiers and their degradation work, look at this example:

original:  'Santa Claus'
1st copy:  'santa cla#s'
2nd copy:  'sa#t# cl#+s'
3rd copy:  'sa+## c#+:s'
4th copy:  's#++. c+:.s'
5th copy:  's#+:. c:. s'
Therefore s#+:. c+:++ is a valid copy of Santa Claus. And, as you see, the degradation of the letters does not occur in a specific order, it is random.
*/

function checkIsValidCopy(original: string, copy: string): boolean {
  if (original.length !== copy.length) return false;
  const characters = "#+:. ";
  const upper = /[A-Z]/;
  const abc = /[a-zA-Z]/;

  for (let i = 0; i < original.length; i++) {
    if (original[i] === copy[i]) continue;
    if (original[i] === " " && copy[i] !== " ") return false;

    const firstTest =
      abc.test(original[i]) &&
      abc.test(copy[i]) &&
      upper.test(original[i]) &&
      original[i].toLowerCase() !== copy[i];

    if (firstTest || (!upper.test(original[i]) && upper.test(copy[i])))
      return false;

    for (let j = 1; j < characters.length; j++) {
      if (
        (abc.test(original[i]) && characters.includes(original[i])) ||
        (!abc.test(original[i]) &&
          original[i] === characters[i] &&
          copy[i] !== characters[j])
      )
        return false;
    }
  }
  return true;
}

console.log(checkIsValidCopy("Santa Claus", "###:. c:+##")); // true
console.log(checkIsValidCopy("Santa Claus", "s#+:. c:. s")); // true
console.log(checkIsValidCopy("Santa Claus", "s#+:.#c:. s")); // false (there is a # where it shouldn't be)

console.log(checkIsValidCopy("Santa Claus is coming", "p#nt: cla#s #s c+min#")); // false

console.log(checkIsValidCopy("S#nta Claus", "S#ntA ClauS")); // false
console.log(checkIsValidCopy("s+#:.#c:. s", "s#+:.#c:. s")); //false
