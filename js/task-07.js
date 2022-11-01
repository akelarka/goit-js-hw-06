const input = document.querySelector('#font-size-control');
const inputValue = input.valueAsNumber;

const text = document.querySelector('#text');
const fontSize = parseInt(window.getComputedStyle(text).fontSize); 

input.addEventListener('input', onSize);

function onSize(event) {
    text.style.fontSize = `${fontSize / inputValue * event.target.valueAsNumber}px`;
};