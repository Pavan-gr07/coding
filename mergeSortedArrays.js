const array1 = [0, 3, 4, 21, 31];
const array2 = [2, 8, 23, 41, 31];
//output -> [0,2,3,4,8,21,23,31,31,41]

function mergeSortedArray(array1, array2) {
  let firstArray = array1[0];
  let secondArray = array2[0];
  let mergeArray = [];
  let i = 0;
  let j = 0;

  while (firstArray || secondArray) {
    if (firstArray < secondArray) {
      console.log(firstArray, secondArray);
      mergeArray.push(firstArray);
      firstArray = array1[i];
      i++;
    } else {
      mergeArray.push(firstArray);
      secondArray = array2[j];
      j++;
    }
  }
  return mergeArray;
}
``;

console.log(mergeSortedArray(array1, array2));
