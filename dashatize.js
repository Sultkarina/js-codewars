function dashatize(num) {
  let numStr = Math.abs(num).toString();
  let result = "";
  for (let i = 0; i < numStr.length; i++) {
    let char = numStr[i];
    if (char % 2 !== 0) {
      if (i > 0 && result[result.length - 1] !== "-") {
        result += "-";
      }
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

console.log(dashatize(274));
console.log(dashatize(5311));
console.log(dashatize(86320));
console.log(dashatize(974302));
