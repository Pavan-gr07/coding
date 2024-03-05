// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

function productOfArrayAcceptItself(nums) {
  const productArray = [];

  if (allZeros(nums)) {
    for (let i = 0; i < nums.length; i++) {
      productArray.push(0);
    }
    return productArray;
  }
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }
    if (product != 0) {
      productArray.push(product);
    } else {
      productArray.push(Math.abs(product));
    }
  }
  return productArray;
}
function allZeros(arr) {
  return arr.every((ele) => ele === 0);
}

console.log(productOfArrayAcceptItself([-1, 1, 0, -3, 3]));
// Time complexity - o(n2)
// Space complexity - o(n)

//to reduce time complexity to O(a+b) and spaceComplexity O(n)

// var productExceptSelf = function (nums) {
//   let res = new Array(nums.length);
//   let cur = 1;
//   for (let i = 0; i < nums.length; i++) {
//     res[i] = cur;
//     cur *= nums[i];
//   }
//   cur = 1;
//   for (let i = nums.length - 1; i >= 0; i--) {
//     res[i] *= cur;
//     cur *= nums[i];
//   }
//   return res;
// };
