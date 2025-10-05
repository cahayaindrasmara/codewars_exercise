function calculate(num1, operation, num2) {
  let result = null;
  
  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "/") {
    result = num1 / num2;
  } else if (operation === "*") {
    result = num1 * num2;
  }
  
  return result === -Infinity || result === Infinity ? null : result;
}

console.log(calculate(3.2, "+", 8));
console.log(calculate(3.2, "-", 8));
console.log(calculate(3.2, "/", 8));
console.log(calculate(3.2, "*", 8));
console.log(calculate(-3, "/", 0));
console.log(calculate(3, "/", 0));