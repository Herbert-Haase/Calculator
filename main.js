let operators = {
  "+" : (num1, num2) => num1 + num2,
  "-" : (num1, num2) => num1 - num2,
  "/" : (num1, num2) => num1 / num2,
  "*" : (num1, num2) => num1 * num2,
}

let num1 = ""
let num2 = ""
let operator = null
let operatorString = ""


function operate(operator, num1, num2) {
  return operator(+num1, +num2)
}

function display(operator, operatorString, num1, num2) {
  displayString = `${num1} ${operatorString} ${num2}`
  displaySpace = document.querySelector("#display")
  displaySpace.textContent = displayString
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.className == "number") {
      if (operator === null) {
        num1 += button.textContent
      }
      else {
        num2 += button.textContent
      }
    }
    else if (button.className == "operator") {
      if (operator === null) {
        operator = operators[button.textContent]
        operatorString = button.textContent
      }      
      else if (num1 !== "" || num2 !== "") {
        num1 = operate(operator, num1, num2)
        num2 = ""
        operator = operators[button.textContent]
        operatorString = button.textContent
      }
    } 
    display(operator, operatorString, num1, num2)
    })
  })