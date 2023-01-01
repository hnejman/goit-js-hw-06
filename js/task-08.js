const formInput = document.querySelector(".login-form");
const emailInput = formInput.children[0];
const passwordInput = formInput.children[1];

formInput.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault(); 
  emailInput.children[0].classList = "login-form__alert-off";
  passwordInput.children[0].classList = "login-form__alert-off";
 if(emailInput.children[1].value == 0){
    emailInput.children[0].classList = "login-form__alert-on";
    console.log("Email field shouldn't be empty");
 }else if(passwordInput.children[1].value == 0){
    passwordInput.children[0].classList = "login-form__alert-on";
    console.log("Password field shouldn't be empty");
 }else{
    const log = {
        email: emailInput.children[1].value,
        password: passwordInput.children[1].value
    }
    console.log(log);
    emailInput.children[1].value = "";
    passwordInput.children[1].value = "";
 };
}
