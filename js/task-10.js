function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input")
const buttonCreate = document.querySelector("button[data-create]")
const buttonDestroy = document.querySelector("button[data-destroy]")
const boxesDiv = document.querySelector("#boxes")

buttonCreate.addEventListener('click', createBoxes)
buttonDestroy.addEventListener('click', deleteBoxes)

let minSquareSize = 30

function createBoxes(amount) {
    amount = inputEl.value
    for (let i = 0; i < amount; i += 1) {
        const el = document.createElement("div")
        el.style.backgroundColor = getRandomHexColor()
        el.style.height = `${i* 10+ minSquareSize}px`
        el.style.width = `${i * 10 + minSquareSize}px` 
        boxesDiv.append(el)
    }

}

function deleteBoxes() {
    boxesDiv.innerHTML = ''
    minSquareSize = 30
}
