// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order,
//  starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q
// merged: a p b q c   d

function mergeStringAlternate(s1, s2) {
  const finalS1 = s1.split(""); //O(n) space
  const finalS2 = s2.split(""); //O(n) space
  const finalString = []; //O(n)
  let length = 0;
  if (finalS1.length > finalS2.length) {
    length = finalS1.length;
  } else {
    length = finalS2.length;
  }

  for (let i = 0; i < length; i++) {
    if (finalS1[i] != undefined) {
      finalString.push(finalS1[i]);
    }
    if (finalS2[i] != undefined) {
      finalString.push(finalS2[i]);
    }
  }
  return finalString.join("").toString();
}
// console.log(mergeStringAlternate("abcd", "pq"));
//Space complexity -- O(n)
//Time complexity -- O(n)
