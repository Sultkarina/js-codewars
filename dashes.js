function insertDash(num) {
  let numStr = Math.abs(num).toString();
  let result = "";
  for (let i = 0; i < numStr.length; i++) {
    let char = numStr[i];
    if (char % 2 !== 0 && numStr[i + 1] % 2 !== 0) {
      result += char;
      if (i < numStr.length - 1) {
        result += "-";
      }
    } else {
      result += char;
    }
  }
  return result;
}
console.log(insertDash(454793));
console.log(insertDash(123456));
console.log(insertDash(1003567));