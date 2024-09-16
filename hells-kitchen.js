function gordon(a) {
  let words = a.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    let word = words[i].split("");
    for (let j = 0; j < word.length; j++) {
      if (word[j] === "a" || word[j] === "A") {
        result += "@";
      } else if ("eiou".includes(word[j].toLowerCase())) {
        result += "*";
      } else {
        result += word[j].toUpperCase();
      }
    }

    result += "!!!! ";
  }

  return result.trim();
}

console.log(gordon("What are you doing"));
console.log(gordon("are you stu pid"));
console.log(gordon("i am a chef"));
