function explode(x) {
  let result = [];
  let count;
  if (typeof x[0] === "number" && typeof x[1] === "number") {
    count = x[0] + x[1];
  } else if (typeof x[0] === "number" && typeof x[1] !== "number") {
    count = x[0];
  } else if (typeof x[1] === "number" && typeof x[0] !== "number") {
    count = x[1];
  } else {
    return "Void!";
  }

  for (let i = 0; i < count; i++) {
    result.push(x);
  }
  return result;
}

console.log(explode([9, 3]));
console.log(explode(["a", 3]));
console.log(explode([6, "c"]));
console.log(explode(["a", "b"]));
console.log(explode(["a", 0]));
