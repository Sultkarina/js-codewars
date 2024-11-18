function encode(string) {
  return string
    .split("")
    .map((char) => {
      switch (char) {
        case "a":
          return "1";
        case "e":
          return "2";
        case "i":
          return "3";
        case "o":
          return "4";
        case "u":
          return "5";
        default:
          return char;
      }
    })
    .join("");
}

function decode(string) {
  return string
    .split("")
    .map((char) => {
      switch (char) {
        case "1":
          return "a";
        case "2":
          return "e";
        case "3":
          return "i";
        case "4":
          return "o";
        case "5":
          return "u";
        default:
          return char;
      }
    })
    .join("");
}

console.log(encode("hello"));
console.log(encode("How are you today?"));
console.log(encode("This is an encoding test."));
console.log(decode("h2ll4"));
