const textInput = document.querySelector(".form");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", event =>{
    event.preventDefault();
    if(event.target.childNodes[1].value === ""){
        textOutput.textContent = "input";
    }
    else{
        textOutput.textContent = event.target.childNodes[1].value;
    }
});
