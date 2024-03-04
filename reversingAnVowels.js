// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

function reversingAnVowels(str) {
  const newString = [];
  const stringArray = str
    .split("")
    .filter(
      (data) =>
        data === "a" ||
        data == "e" ||
        data == "i" ||
        data === "o" ||
        data == "u" ||
        data === "A" ||
        data == "E" ||
        data == "I" ||
        data === "O" ||
        data == "U"
    );
  let storedVowel = stringArray.length - 1;

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u" ||
      str[i] === "A" ||
      str[i] === "E" ||
      str[i] === "I" ||
      str[i] === "O" ||
      str[i] === "U"
    ) {
      newString.push(stringArray[storedVowel]);
      storedVowel--;
    } else {
      newString.push(str[i]);
    }
  }
  return newString.join("");
}

console.log(reversingAnVowels("aA"));

// var reversingAnVowels = function (s) {
//   let i,
//     l = s.length - 1;
//   for (i = 0; i < l; ) {
//     if (isvovel(s[i]))
//       if (isvovel(s[l])) {
//         if (!(s[i] == s[l])) {
//           s =
//             s.substring(0, i) +
//             s[l] +
//             s.substring(i + 1, l) +
//             s[i] +
//             s.substring(l + 1, s.length);
//         }
//         i++;
//         l--;
//       } else l--;
//     else i++;
//   }
//   return s;
// };
// function isvovel(s) {
//   if (
//     s == "a" ||
//     s == "e" ||
//     s == "i" ||
//     s == "o" ||
//     s == "u" ||
//     s == "A" ||
//     s == "E" ||
//     s == "I" ||
//     s == "O" ||
//     s == "U"
//   )
//     return true;
//   else return false;
// }

// console.log(reversingAnVowels("hello"));
