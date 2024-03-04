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

// function canPlaceFlowers(flowerbed, n) {
//   let count = n;
//   let skipNext = false;
//   for (let i = 0; i < flowerbed.length; i++) {
//     if (skipNext) {
//       skipNext = false;
//       continue;
//     }

//     if (flowerbed[i] === 0) {
//       flowerbed[i] === 1;
//       count--;
//       if (flowerbed[i + 1] === 1) {
//         continue;
//       }
//     } else {
//     }
//     if (flowerbed[i] === 0) {
//       flowerbed[i] = 1;
//       count--;
//     }

//     if (array[i] === 3) {
//       skipNext = true;
//     }
//   }
//   if (count > 0) {
//     return false;
//   } else {
//     return true;
//   }
// }

function canPlaceFlowers(flowerbed, n) {
  let count = 0;
  let i = 0;

  while (i < flowerbed.length) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      count++;
    }

    if (count >= n) {
      return true;
    }

    i++;
  }

  return count >= n;
}

// Example usage:
const flowerbed = [1, 0, 0, 0, 1];
const n = 2;
console.log(canPlaceFlowers(flowerbed, n));

// injava
// class Solution {
//   public boolean canPlaceFlowers(int[] flowerbed, int n) {
//       int m = flowerbed.length;
//       int totalUsablePlot = (int) Math.ceil(m / 2.0);

//       if (totalUsablePlot < n) {
//           return false;
//       }

//       int usedPlot = 0;
//       int availablePlot = 0;

//       for (int i = 0; i < m; i++) {
//           if (flowerbed[i] == 1) {
//               usedPlot++;
//               i++;
//           } else {
//               boolean prevOccupied = i == 0 || flowerbed[i - 1] == 0;
//               boolean nextOccupied = i == m - 1 || flowerbed[i + 1] == 0;

//               if (prevOccupied && nextOccupied) {
//                   flowerbed[i] = 1;
//                   availablePlot++;
//                   i++;
//               }
//           }
//       }

//       return availablePlot >= n;
//   }
// }
