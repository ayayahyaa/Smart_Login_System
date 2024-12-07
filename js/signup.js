var signupName = document.getElementById("nameInput");
var signupEmail = document.getElementById("emailInput");
var signupPassword = document.getElementById("passwordInput");
var btnSignUp = document.getElementById("btnSignup");
var incorrect = document.getElementById("incorrect");
var btnSignIn = document.querySelector(".btnn");

var signUpArray = [];

if (localStorage.getItem("usersContainer") !== null) {
signUpArray = JSON.parse(localStorage.getItem("usersContainer"));
}


btnSignUp.addEventListener("click", function () {
signUp();
});



function InputsEmpty() {
    if (
    signupName.value == "" ||
    signupEmail.value == "" ||
    signupPassword.value == ""
){
    return true;
}   else{
    return false;
}
}


function EmailExist() {
for (var i = 0; i < signUpArray.length; i++) {
    if (signUpArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
    return true;
}
}
}


function signUp() {
    if (InputsEmpty() == true || EmailExist() == true) {
    incorrect.innerHTML = `<span class="text-danger alert alert-danger">All inputs is
                                required , And email shouldn't be exist  </span>`;
    return true;
}   else {
    var signUp = {
    name: signupName.value,
    email: signupEmail.value,
    password: signupPassword.value,
};

    signUpArray.push(signUp);
    console.log(signUpArray);
    localStorage.setItem("usersContainer", JSON.stringify(signUpArray));
    incorrect.innerHTML = `<span class="text-success bg-success-subtle p-2 fs-3 m-3">success</span>`;
    window.location = "./index.html";
}
}