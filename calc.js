function calc(x) {
  const total1 = x
    .split("")
    .map((char) => char.charCodeAt(0))
    .join("");
  let total2 = total1.replace("7", "1");
  while (total2.includes("7")) {
    total2 = total2.replace("7", "1");
  }
  function sum(num) {
    return num.split("").reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return sum(total1) - sum(total2);
}

console.log (calc('abcdef'));
console.log (calc('ifkhchlhfd'));
console.log (calc('aaaaaddddr'));
console.log (calc('jfmgklf8hglbe'));
console.log (calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));