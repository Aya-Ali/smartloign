let SignUp = document.getElementById("signup");
let SignIn = document.getElementById("signin");
let login = document.getElementById("login-button");
let create = document.getElementById("create-button");
let nameInputt = document.getElementById("nameInput");
let emailInputt = document.getElementById("EmailInput");
let passwordInputt = document.getElementById("PasswordInput");
let infoList = [];
let newArr = JSON.parse(localStorage.getItem("account information"))

SignUp.addEventListener("click", function () {
    document.getElementById("nameInput").style.display = "block"
    SignUp.style.display = "none"
    SignIn.style.display = "inline-block"
    login.style.display = "none"
    create.style.display = "inline-block"
})
SignIn.addEventListener("click", function () {
    document.getElementById("nameInput").style.display = "none"
    SignUp.style.display = "inline-block"
    SignIn.style.display = "none"
    login.style.display = "inline-block"
    create.style.display = "none"
    emailInputt.value = ""
    passwordInputt.value = ""
    document.getElementById("creation-message").innerHTML = ""

})

create.addEventListener("click", function () {
    let information = {
        name: nameInputt.value,
        email: emailInputt.value,
        password: passwordInputt.value,
    }
    if (nameInputt.value != "" && emailInputt.value != "" && passwordInputt.value != "") {
        infoList.push(information)
        localStorage.setItem("account information", JSON.stringify(infoList))
        document.getElementById("creation-message").innerHTML = "sucess"
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'These fields are required !',
        })
    }
})
login.addEventListener("click", function () {
    newArr = JSON.parse(localStorage.getItem("account information"))
    if (emailInputt.value == "" || passwordInputt.value == "") {
        document.getElementById("creation-message").innerHTML = "All inputs are required"
    }
    else if (checkEmpty() == false) {
        document.getElementById("creation-message").innerHTML = "false"
    }
    else {
        checkUser()
    }
})

function checkUser() {
    for (let i = 0; i < newArr.length; i++) {
        if (emailInputt.value == newArr[i].email && passwordInputt.value == newArr[i].password) {
            let y = newArr[i].name
            localStorage.setItem("username", y)
            window.location.href = "Home.html"
            break;
        }
    }
}
function checkEmpty() {
    for (let i = 0; i < newArr.length; i++) {
        if (emailInputt.value != newArr[i].email && passwordInputt.value != newArr[i].password)
            return false
        break;
    }
}
