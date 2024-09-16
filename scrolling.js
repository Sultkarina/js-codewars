function scrollingText(text) {
  let word = text.toUpperCase();
  let result = [];
  for (let i = 0; i < word.length; i++) {
    result.push(word);
    word = word.slice(1) + word[0];
  }
  return result;
}
