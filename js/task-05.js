const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
console.log(textInput);
console.log(textOutput);

textInput.addEventListener("input", event =>{
    event.preventDefault();
    if(textInput.value === ""){
        textOutput.textContent = "Anonymus";
    }
    else{
        textOutput.textContent = textInput.value;
    }
});