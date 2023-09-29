let topScreen = document.querySelector("#top-screen");
let bottomScreen = document.querySelector("#bottom-screen");

let storedValue;
let insertedValue = document.querySelector("#bottom-screen");
insertedValue.innerHTML = "0";

const buttons = document.querySelectorAll("#buttons>div>button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (insertedValue.innerHTML == 0) {
      insertedValue.innerHTML = `${button.id}`;
    } else {
      insertedValue.innerHTML += `${button.id}`;
    }
  });
});
