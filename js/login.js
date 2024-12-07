var email = document.getElementById("emailInput");
var password = document.getElementById("passwordInput");
var incorrectAlert = document.getElementById("incorrectAlert");
var btn = document.getElementById("btnLogin");
var signUpArray = [];


if (localStorage.getItem("usersContainer") !== null){
    signUpArray =JSON.parse(localStorage.getItem("usersContainer"));
}


btnLogin.addEventListener("click", function () {
    login();
});


function InputsEmpty() {
    if ((emailInput.value == '' || passwordInput.value == '')) {
        return true;
    } else {
        return false;
    }
}

function login() {
    if (InputsEmpty() == true) {
    incorrectAlert.innerHTML =
        '<span class="text-danger bg-danger-subtle">All inputs is required</span>';
    return;
    } else {
    var password = passwordInput.value;
    var email = emailInput.value;
    for (var i = 0; i < signUpArray.length; i++) {
        if (
        signUpArray[i].email.toLowerCase() == email.toLowerCase() &&
        signUpArray[i].password.toLowerCase() == password.toLowerCase()
){
        localStorage.setItem("userNameStorage", signUpArray[i].name);
        window.location = "./home.html"; 
}
}
}
}


