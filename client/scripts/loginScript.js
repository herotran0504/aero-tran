import {LoginController} from "./controller/loginController.js"
const controller = LoginController.create();

window.onload = async function () {
    await addEventListeners();
}

async function addEventListeners() {
    $("#form").on("submit", function (event) {
        event.preventDefault();
        $("#submitBtn").prop('disabled', true);
        controller.login(
            $("#email").val(),
            $("#password").val()
        ).then(() => {
            $("#submitBtn").prop('disabled', false);
        });
    });
}