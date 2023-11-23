let displayValue = "0";
let currentInput = "";
let currentOperator = "";

const buttons = document.getElementsByClassName("button");
for (const button of buttons) {
  button.addEventListener("click", function () {
    const buttonText = this.innerText;
    if (!isNaN(parseInt(buttonText))) {
      appendNumber(buttonText);
    } else if (buttonText === "C") {
      clearDisplay();
    } else {
      operate(buttonText);
    }
  });
}

function clearDisplay() {
  displayValue = "0";
  currentInput = "";
  currentOperator = "";
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").innerText = displayValue;
}

function appendNumber(number) {
  if (displayValue === "0") {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function operate(operator) {
  if (currentInput !== "") {
    calculateResult();
  }
  currentOperator = operator;
  currentInput = displayValue;
  displayValue = "0";
}

function calculateResult() {
  if (currentInput !== "" && currentOperator !== "") {
    switch (currentOperator) {
      case "÷":
        displayValue = (
          parseInt(currentInput) / parseInt(displayValue)
        ).toString();
        break;
      case "×":
        displayValue = (
          parseInt(currentInput) * parseInt(displayValue)
        ).toString();
        break;
      case "–":
        displayValue = (
          parseInt(currentInput) - parseInt(displayValue)
        ).toString();
        break;
      case "+":
        displayValue = (
          parseInt(currentInput) + parseInt(displayValue)
        ).toString();
        break;
    }
    currentInput = "";
    currentOperator = "";
    updateDisplay();
  }
}
