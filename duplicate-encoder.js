function duplicateEncode(word) {
  let lowerCaseWord = word.toLowerCase();
  let result = "";
  for (let i = 0; i < lowerCaseWord.length; i++) {
    if (
      lowerCaseWord.indexOf(lowerCaseWord[i]) ===
      lowerCaseWord.lastIndexOf(lowerCaseWord[i])
    ) {
      result += "(";
    } else {
      result += ")";
    }
  }

  return result;
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
