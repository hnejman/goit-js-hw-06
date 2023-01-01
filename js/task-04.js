const decrement = document.querySelectorAll("button")[0];
const increment = document.querySelectorAll("button")[1];

let value = document.querySelector("#value");
console.log(value);

let number = value.textContent;
increment.addEventListener("click", event => {
    number ++;
    value.textContent = number;
});
decrement.addEventListener("click", event => {
    number --;
    value.textContent = number;
});
