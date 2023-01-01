const textInput = document.querySelector("input");

textInput.addEventListener("blur", blur =>{
    console.log(textInput.value.length);
    console.log(textInput.dataset.length);
    if(textInput.value.length == textInput.dataset.length){
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
    }else{
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    };
})

textInput.blur();