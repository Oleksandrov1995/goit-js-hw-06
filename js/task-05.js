const nameInput = document.querySelector("#name-input");
console.log(nameInput);
const nameOutput = document.querySelector("#name-output");
console.log(nameOutput);

nameInput.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = event.currentTarget.value;
  }
}
