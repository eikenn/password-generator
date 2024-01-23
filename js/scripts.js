let sliderEl = document.querySelector("#slider")
let buttonEl = document.querySelector("#gen-button")

let sizePassword = document.querySelector("#value")
let password = document.querySelector("#password")

let containerPassword = document.querySelector(".container-password")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@&*^%#"
let newPassword = ""

sizePassword.innerHTML = sliderEl.value

slider.oninput = function() {
    sizePassword.innerHTML = this.value
}

function generatePassword() {

    let pass = ""

    for(let i = 0, n = charset.length; i  < sliderEl.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    containerPassword.classList.remove("hide")
    password.innerHTML = pass
    newPassword = pass
}

function copyPassword() {
    navigator.clipboard.writeText(newPassword)
}