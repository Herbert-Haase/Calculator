let operators = {
  "+" : (num1, num2) => num1 + num2,
  "-" : (num1, num2) => num1 - num2,
  "/" : (num1, num2) => num1 / num2,
  "*" : (num1, num2) => num1 * num2,
}

let num1 = ""
let num2 = ""
let operator = null


function operate(operator, num1, num2) {
  return operator(+num1, +num2)
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.className == "number") {
      if (operator !== null) {
        num1 += button.textContent
      }
      else {
        num2 += button.textContent
      }
    }
    else if (button.className == "operator") {
      if (operator === null) {
        operator = operators[button.textContent]
      }      
      else if (num1 !== "" || num2 !== "") {
        num1 = operate(operator, num1, num2)
        num2 = ""
        operator = operators[button.textContent]
      }
    } 

    })
  })