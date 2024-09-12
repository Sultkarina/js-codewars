function high(x) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const words = x.split(" ");
  let maxScore = 0;
  let highestWord = "";

  words.forEach((word) => {
    const score = word
      .split("")
      .reduce((acc, char) => acc + (alphabet.indexOf(char) + 1), 0);

    if (score > maxScore) {
      maxScore = score;
      highestWord = word;
    }
  });

  return highestWord;
}
console.log(high("man i need a taxi up to ubud"));
console.log(high("what time are we climbing up the volcano"));
console.log(high("take me to semynak"));
console.log(high("aa b"));
console.log(high("b aa"));
console.log(high("bb d"));
console.log(high("d bb"));
console.log(high("aaa b"));
