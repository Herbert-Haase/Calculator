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

  // divide by Zero
  if (num2 === "0" && operatorString == "/") {displayString = "Error Divide by Zero"}
  displaySpace.textContent = displayString
}

// clear button 
function clear() {
  operator = null
  operatorString = ""
  num1 = ""
  num2 = ""
}

document.querySelector(".clear").addEventListener("click", () => {
  clear()
  display(operator, operatorString, num1, num2)
})

// equals button
function equals() {
        num1 = operate(operator, num1, num2)
        num2 = ""
}

document.querySelector(".equals").addEventListener("click", () => {
  equals()
  operatorString = ""
  operator = null
  display()
})

// decimal button
document.querySelector(".decimal").addEventListener("click", () => {
      if (operator === null) {
        if (num1.search("\\.") == -1) {
          num1 += "."
        }
      }
      else {
        if (num2.search("\\.") == -1) {
          num2 += "."
        }
      }
})


// numbers and operators buttons
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
        equals()
        operatorString = button.textContent
        operator = operators[button.textContent]
      }
    } 
    display(operator, operatorString, num1, num2)
    })
  })