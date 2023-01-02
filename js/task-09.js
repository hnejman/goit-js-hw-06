function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputButton = document.querySelector(".change-color");
const output = document.querySelector("body");
const outputSpan = document.querySelector(".color")

inputButton.addEventListener("click", click =>{
  output.style.backgroundColor = getRandomHexColor();
  outputSpan.textContent = output.style.backgroundColor;
})