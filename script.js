let topScreen = document.querySelector("div[previous-operand]");
let bottomScreen = document.querySelector("div[current-operand]");
let numberButtons = document.querySelectorAll("button[number-button]");
let operationButtons = document.querySelectorAll("button[operation-button]");
let decimalButton = document.querySelector("button[decimal-button]");
let clearButton = document.querySelector("button[clear-button]");
let deleteButton = document.querySelector("button[delete-button]");
let equalsButton = document.querySelector("button[equals-button]");

bottomScreen.textContent = "0";
topScreen.textContent = "";

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (bottomScreen.textContent === "0") {
      bottomScreen.textContent = button.textContent;
    } else {
      bottomScreen.textContent += button.textContent;
    }
  });
});

decimalButton.addEventListener("click", () => {
  if (!bottomScreen.textContent.includes(".")) {
    bottomScreen.textContent += ".";
  }
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (topScreen.textContent !== "") {
      equalsButton.click();
    }
    topScreen.textContent = bottomScreen.textContent + button.textContent;
    bottomScreen.textContent = "";
  });
});

equalsButton.addEventListener("click", () => {
  if (topScreen.textContent !== "") {
    topScreen.textContent = topScreen.textContent + bottomScreen.textContent;
    bottomScreen.textContent = eval(topScreen.textContent);
    topScreen.textContent += "=";
  }
});

clearButton.addEventListener("click", () => {
  topScreen.textContent = "";
  bottomScreen.textContent = "0";
});

deleteButton.addEventListener("click", () => {
  bottomScreen.textContent = bottomScreen.textContent.slice(0, -1);
});
