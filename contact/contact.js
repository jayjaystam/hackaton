// get data
const nameInput = document.querySelectorAll("#name");
const email = document.querySelectorAll("#email");
const message = document.querySelectorAll("#message");
const success = document.querySelectorAll("#success");
const errorNodes = document.querySelectorAll(".error");

// validate data 
function validateForm(){
    
    clearMessage();
    let errorFlag = false;

    if(nameInput.values.length < 1){
        errorNodes[0].innerText = "name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
    }
    if(message.value.length < 1){
        errorNodes[2].innerText = "please enter message";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag){
        success
    }
}

// clear error / success message
function clearMessage(){
    for(let i =; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove

}
// check if email is valid
function emailIsValid(email){
    let pattern = /\S@\S+\.\S+/;
    return pattern.test(email);


}