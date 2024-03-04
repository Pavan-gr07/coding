// 605. Can Place Flowers
// Easy
// Topics
// Companies
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

function canPlaceFlowers(flowerbed, n) {
  let count = n;
  let skipNext = false;
  for (let i = 0; i < flowerbed.length; i++) {
    if (skipNext) {
      skipNext = false;
      continue;
    }

    if (flowerbed[i] === 0) {
      flowerbed[i] === 1;
      count--;
      if (flowerbed[i + 1] === 1) {
        continue;
      }
    } else {
    }
    if (flowerbed[i] === 0) {
      flowerbed[i] = 1;
      count--;
    }

    if (array[i] === 3) {
      skipNext = true;
    }
  }
  if (count > 0) {
    return false;
  } else {
    return true;
  }
}
