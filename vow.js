function isVow(a) {
  return a.map((char) => {
    switch (char) {
      case 97:
        return "a";
      case 101:
        return "e";
      case 105:
        return "i";
      case 111:
        return "o";
      case 117:
        return "u";
      default:
        return char;
    }
  });
}

console.log(
  isVow([
    118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
    120, 106,
  ])
);
console.log(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]));
