function checkRoot(string) {
  let nums = string.split(",").map(Number);
  if (nums.length !== 4 || nums.some((n) => isNaN(n) || n <= 0))
    return "incorrect input";
  if (nums.some((n, i) => n !== nums[0] + i)) return "not consecutive";
  let r = 1 + nums.reduce((p, c) => (p *= c), 1);
  return [r, Math.sqrt(r)].join(", ");
}

console.log(checkRoot("4,5,6,7"));
console.log(checkRoot("3,s,5,6"));
console.log(checkRoot("11,13,14,15"));
