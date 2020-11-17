var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPassword");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");

function loginValidation() {
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    var flag = 0;
    if (regexp.test(inputEmail.value) == false) {
        inputEmail.style.border = "2px solid red";
        emailError.innerText = "Invalid Email";
        emailError.style.color = "red";
        flag = 1;
    } else {
        if (emailError.innerText == "Invalid Email") {
            emailError.innerText = "";
            inputEmail.style.border = "";
        }
    }
    regexp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (regexp.test(inputPassword.value) == false) {
        inputPassword.style.border = "2px solid red";
        passwordError.innerText = "Invalid Password";
        passwordError.style.color = "red";
        flag = 1;
    } else {
        if (passwordError.innerText == "Invalid Password") {
            passwordError.innerText = "";
            inputPassword.style.border = "";
        }
    }
    if (flag == 1) {
        return false;
    }
    else {
        return true;
    }

}