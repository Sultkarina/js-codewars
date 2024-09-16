function nthChar(words) {
  let result = "";
  if (!words || words.length == 0) {
    return "";
  }
  for (let i = 0; i < words.length; i++) {
    result += words[i][i];
  }
  return result;
}
console.log(nthChar([]));
console.log(nthChar(["yoda", "best", "has"]));
