const fontSize = document.querySelector('#font-size-control');
console.log(fontSize)
const text = document.querySelector('#text')
console.log(text)

fontSize.addEventListener("input", handleInputRange);
function handleInputRange(event) {
    text.style.fontSize = event.currentTarget.value + "px";
}