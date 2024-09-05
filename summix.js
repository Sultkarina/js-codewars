function sumMix(x) {
  let sum = 0;

  for (let element of x) {
    sum += Number(element);
  }

  return sum;
}

const array = [9, 3, "7", "3"];
console.log(sumMix(array));
