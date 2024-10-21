function calculateString(st) {
  let number1 = "";
  let number2 = "";
  let operator = "";
  let firstnumber = true;
  st.split("").forEach((char) => {
    if ((char >= "0" && char <= "9") || char === ".") {
      if (firstnumber) {
        number1 += char;
      } else {
        number2 += char;
      }
    } else if (["+", "-", "*", "/"].includes(char)) {
      operator = char;
      firstnumber = false;
    }
  });

  const num1 = parseFloat(number1);
  const num2 = parseFloat(number2);

  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }

  return Math.round(result).toString();
}

console.log(calculateString(";$%§fsdfsd235??df/sdfgf5gh.000kk0000"));
console.log(calculateString("sdfsd23454sdf*2342"), "54929268");
console.log(calculateString("fsdfsd235???34.4554s4234df-sdfgf2g3h4j442"));
console.log(calculateString("fsdfsd234.4554s4234df+sf234442"));
console.log(calculateString("a1a2b3c.c0c/a1a0b.cc00c")); 