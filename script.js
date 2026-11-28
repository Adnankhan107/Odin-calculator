const add = (a, b) => {return a + b; }
const sub = (a, b) => {return a - b; } 
const mul = (a, b) => {return a * b; } 
const div = (a, b) => {return a / b; }

let firstNumber = "";
let operator = "";
let secoundNumber = "";

function operate(operator, num1, num2) {
  const a = Number(num1);
  const b = Number(num2);

  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return sub(a, b);
    case "*":
      return mul(a, b);
    case "/":
      if (b === 0) return "Can't divide by 0";
      return div(a, b);
    default:
      return null;
  }
}


  