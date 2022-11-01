const body = document.body;
const colorEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');

buttonEl.addEventListener('click', btnClick);

function btnClick(event) {
  const color = getRandomHexColor();

  body.style.background = color;
  colorEl.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
