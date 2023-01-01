const textInput = document.querySelector(".form");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("submit", event =>{
    event.preventDefault();
    if(event.target.childNodes[1].value === ""){
        textOutput.textContent = "Anonymus";
    }
    else{
        textOutput.textContent = event.target.childNodes[1].value;
    }
});
