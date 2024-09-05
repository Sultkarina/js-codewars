function divCon(x) {
  let number = 0;
  let stroke = 0;

  x.forEach((item) => {
    if (typeof item === "number") {
      number += item;
    } else if (typeof item === "string") {
      {
        stroke += parseInt(item);
      }
    }
  });
  return number - stroke;
}

console.log(divCon([9, 3, "7", "3"]));
console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(divCon(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
