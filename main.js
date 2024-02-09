const operators = {
  "+": (num1, num2) => num1 + num2,
  "-": (num1, num2) => num1 - num2,
  "/": (num1, num2) => num1 / num2,
  "*": (num1, num2) => num1 * num2,
};

let num1 = "";
let num2 = "";
let operator = null;
let operatorString = "";
const displaySpace = document.querySelector("#display");

function operate(operator, num1, num2) {
  return operator(+num1, +num2);
}

function display() {
  const displayString = `${num1} ${operatorString} ${num2}`;

  // Divide by Zero
  if (num2 === "0" && operatorString === "/") {
    displaySpace.textContent = "Error: Divide by Zero";
  } else {
    displaySpace.textContent = displayString;
  }
}

// Clear button
function clear() {
  operator = null;
  operatorString = "";
  num1 = "";
  num2 = "";
}

document.querySelector(".clear").addEventListener("click", () => {
  clear();
  display();
});

// Equals button
function equals() {
  num1 = operate(operator, num1, num2);
  num2 = "";
}

document.querySelector(".equals").addEventListener("click", () => {
  equals();
  operatorString = "";
  operator = null;
  display();
});

// Decimal button
document.querySelector(".decimal").addEventListener("click", () => {
  let currentNum = operator === null ? num1 : num2;
  if (!currentNum.includes(".")) {
    currentNum += ".";
    operator === null ? (num1 = currentNum) : (num2 = currentNum);
  }
});

// Numbers and operators buttons
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.className === "number") {
      operator === null ? (num1 += button.textContent) : (num2 += button.textContent);
    } else if (button.className === "operator") {
      if (operator === null) {
        operator = operators[button.textContent];
        operatorString = button.textContent;
      } else if (num1 !== "" || num2 !== "") {
        equals();
        operatorString = button.textContent;
        operator = operators[button.textContent];
      }
    }
    display();
  });
});