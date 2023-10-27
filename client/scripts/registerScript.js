import {RegisterController} from "./controller/registerController.js"

const controller = RegisterController.create();

window.onload = async function () {
    await addEventListeners();
}

async function addEventListeners() {
    const submitBtn = document.getElementById("submitBtn");
    const form = document.getElementById('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        submitBtn.disabled = true;
        let username = document.getElementById("userName").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let dob = document.getElementById("dob").value;
        let address = document.getElementById("address").value;
        controller.register(username, email, password, firstName, lastName, dob, address).then(() => {
            submitBtn.disabled = false;
            form.reset();
        });
    });
}