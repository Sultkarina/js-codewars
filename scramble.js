function scramble(str, arr) {
  const result = new Array(str.length);
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = str[i];
  }
  return result.join("");
}

console.log(scramble("abcd", [0, 3, 1, 2]));
console.log(scramble("sc301s", [4, 0, 3, 1, 5, 2]));
console.log(scramble("bskl5", [2, 1, 4, 3, 0]));
