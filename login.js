
window.onload = function () {

    document.getElementById("google").onclick = google;
    document.getElementById("admin").onclick = admin;
    document.getElementById("fb").onclick = facebook;
    document.getElementById("login").onclick = validate;

};

function validate() {
    var username = document.getElementById("username").value;
    var pwd = document.getElementById("pwd").value;


    if (username) {
        if (username != "Rupanandha") {
            document.getElementById("error").innerHTML = "Username is incorrect.Please verify.";
        }



    }
    else {
        alert("Please input username  provided during registration");

    }

    if (pwd) {
        if (pwd != "Rupa123") {
            document.getElementById("errorpwd").innerHTML = "Password is incorrect.Please verify.";
        }
        else {
            location.href = "Home.html ";
        }


    }
    else {
        alert("Please input password  provided during registration");

    }

};

function facebook() {

    location.href = "https://www.facebook.com/ ";

};
function google() {

    location.href = "https://www.google.com/gmail/about/ ";

};
function admin() {

    location.href = "Admin.html ";

};



