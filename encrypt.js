var encryptThis = function (text) {
  let words = text.split(" ");
  let encryptedWords = words.map((word) => {
    if (word.length === 1) {
      return word.charCodeAt(0);
    } else if (word.length === 2) {
      return word.charCodeAt(0) + word[1];
    } else {
      return word.charCodeAt(0) + word.slice(-1) + word.slice(2, -1) + word[1];
    }
  });
  return encryptedWords.join(" ");
};

console.log(encryptThis("A"));
console.log(encryptThis("A wise old owl lived in an oak"));
console.log(encryptThis("The more he saw the less he spoke"));
console.log(encryptThis("The less he spoke the more he heard"));
console.log(encryptThis("Why can we not all be like that wise old bird"));
console.log(encryptThis("Thank you Piotr for all your help"));
