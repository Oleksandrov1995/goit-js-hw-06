const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  const inputLength = textInput.dataset.length;
  const valueLength = textInput.value.length;

  if (valueLength === Number(inputLength)) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
});
