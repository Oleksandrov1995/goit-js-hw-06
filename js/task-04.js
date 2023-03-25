let counterValue = 0;
const counter = document.querySelector("#value");
const decrementButton = document.querySelector('[data-action="decrement"]')
const incrementButton = document.querySelector('[data-action="increment"]');

decrementButton.addEventListener('click', function ( ) {
 counterValue -=1;
counter.textContent = counterValue;
})
incrementButton.addEventListener('click', function(){
    counterValue +=1;
    counter.textContent = counterValue;
})