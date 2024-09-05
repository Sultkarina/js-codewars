function fakeBin(x) {
  let sum = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      sum = sum + "0";
    } else {
      sum = sum + "1";
    }
  }
  console.log(sum);
  return sum;
}
fakeBin("45385593107843568");
