function reverseAString(str1) {
  let name = "";
  for (let i = str1.length - 1; i >= 0; i--) {
    name += str1[i];
  }
  return name;
}

console.log(reverseAString("Andrie i am jik"));
