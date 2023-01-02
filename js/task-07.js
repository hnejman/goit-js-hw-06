const rangeInput = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

output.style.fontSize = rangeInput.value + "px";

rangeInput.addEventListener("input", event => {
output.style.fontSize = rangeInput.value + "px";
});