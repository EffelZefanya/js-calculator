const numberButtons = document.querySelectorAll("[number-button]");
const operationButton = document.querySelectorAll("[operation-button]");
const equalsButton = document.querySelector("[equals-button]");
const clearButton = document.querySelector("[clear-button]");
const deleteButton = document.querySelector("[delete-button]");
const topScreen = document.querySelector("#top-screen");
const bottomScreen = document.querySelector("#bottom-screen");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.addNumberInStore(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

class Calculator {
  constructor(topScreen, bottomScreen) {
    this.topScreen = topScreen;
    this.bottomScreen = bottomScreen;
    this.clear;
  }
}

function deleteNumber() {}

function clearCalculator() {
  this.topScreen = "";
  this.bottomScreen = "";
  this.operation = undefined;
}

function addNumberInStore(number) {
  if (number === "." && this.bottomScreen.includes("."))
    return (this.bottomScreen =
      this.bottomScreen.toString() + number.toString());
}

function pickedOperand(operation) {}

function calculate() {}

function updateDisplay() {}

const calculator = new Calculator(topScreen, bottomScreen);
