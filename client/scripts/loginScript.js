import {LoginController} from "./controller/loginController.js"
const controller = LoginController.create();

window.onload = async function () {
    await addEventListeners();
}

async function addEventListeners() {
    const submitBtn = document.getElementById("submitBtn");
    const form = document.getElementById('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        submitBtn.disabled = true;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        controller.login(email, password).then(() => {
            submitBtn.disabled = false;
            form.reset();
        });
    });
}