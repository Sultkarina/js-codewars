var capitals = function (word) {
  let index = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      index.push(i);
    }
  }
  return index;
};

console.log(capitals("CodEWaRs"));
