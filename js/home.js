var logOutBtn = document.getElementById("logOut");
var userName = localStorage.getItem("userNameStorage");
document.getElementById("textAndName").innerHTML = "Welcome" + " " + userName;



logOutBtn.addEventListener("click", function () {
toLogOut();
});



function toLogOut() {
    localStorage.removeItem("userNameStorage");
    window.location = "./index.html";
}