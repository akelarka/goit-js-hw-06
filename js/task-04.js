const span = document.querySelector('#value');
const decrementBtn = document.querySelector('#counter').firstElementChild;
const incrementBtn = document.querySelector('#counter').lastElementChild;

let valueCounter = 0;

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

function decrement() {
  valueCounter -= 1;
  span.textContent = valueCounter;
}

function increment() {
  valueCounter += 1;
  span.textContent = valueCounter;
}