function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];
  let negative = input.filter((num) => num < 0);
  let positive = input.filter((num) => num > 0);
  let sum = negative.reduce((acc, num) => acc + num, 0);
  return [positive.length, sum];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
console.log(countPositivesSumNegatives([]));
