const fontSize = document.querySelector("#font-size-control");
console.log(fontSize);
const text = document.querySelector("#text");
console.log(text);
text.style.fontSize = "56px";

fontSize.addEventListener("input", handleInputRange);
function handleInputRange(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}
