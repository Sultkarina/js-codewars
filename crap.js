function crap(x, bags, cap) {
  let countCrap = 0;
  let totalCrap = x.flat();
  if (totalCrap.includes("D")) return "Dog!!";
  else
    for (let i = 0; i < totalCrap.length; i++) {
      if (totalCrap[i] === "@") {
        countCrap++;
      }
    }
  if (bags * cap >= countCrap) return "Clean";
  else return "Cr@p";
}

console.log(
  crap(
    [
      ["_", "_", "_", "_"],
      ["_", "_", "_", "@"],
      ["_", "_", "@", "_"],
    ],
    2,
    2
  )
);
console.log(
  crap(
    [
      ["_", "_", "_", "_"],
      ["_", "_", "_", "@"],
      ["_", "_", "@", "_"],
    ],
    1,
    1
  )
);
console.log(
  crap(
    [
      ["_", "_"],
      ["_", "@"],
      ["D", "_"],
    ],
    2,
    2
  ),
  "Dog!!"
);
