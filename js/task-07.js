const rangeInput = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

console.log(output);
console.log(rangeInput.value);

rangeInput.addEventListener("click", event => {
    output.style.fontSize = rangeInput.value + "px";
console.log(rangeInput.value);
console.log(output.style.fontSize);
});

rangeInput.click();