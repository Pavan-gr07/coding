// 1071. Greatest Common Divisor of Strings
// Easy
// Topics
// Companies
// Hint
// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

// function greatestCommonDivisor(str1, str2) {
//   const finalS1 = str1.split("");
//   const finalS2 = str2.split("");
//   let letters = new Set([]);
//   for (let j = 0; j < finalS2.length; j++) {
//     letters.add(finalS2[j]);
//   }
//   letters = Array.from(letters);
//   let flag = 0;
//   let finalString = "";
//   for (let i = 0; i < letters.length; i++) {
//     if (finalS1[i] === finalS2[flag]) {
//       finalString += finalS2[flag];
//       flag++;
//     }
//   }
//   return finalString;
// }
// console.log(greatestCommonDivisor("ABCDEF", "ABC"));

function greatestCommonDivisor(str1, str2) {
  console.log(str1 + str2, "---", str2 + str1);
  //here comparing the string
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  function gcd(a, b) {
    //to handle odd or even length string if we gor remainder 0 means a else remainder only
    return b === 0 ? a : gcd(b, a % b);
  }

  return str1.substring(0, gcd(str1.length, str2.length));
}
console.log(greatestCommonDivisor("ABCDEF", "ABC"));
