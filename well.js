function well(x) {
  let find = x.filter((element) => element === "good");
  if (find.length == 2 || find.length == 1) {
    return "Publish!";
  } else if (find.length > 2) {
    return "I smell a series!";
  } else {
    return "Fail!";
  }
}
console.log(well(["bad", "bad", "bad"]));
console.log(well(["good", "bad", "bad", "bad", "bad"]));
console.log(
  well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"])
);
