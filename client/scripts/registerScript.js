import {RegisterController} from "./controller/registerController.js"

const controller = RegisterController.create();

window.onload = async function () {
    await addEventListeners();
}

async function addEventListeners() {
    $("#form").on("submit", function (event) {
        event.preventDefault();
        $("#submitBtn").prop('disabled', true);
        controller.register(
            $("#userName").val(),
            $("#email").val(),
            $("#password").val(),
            $("#firstName").val(),
            $("#lastName").val(),
            $("#dob").val(),
            $("#address").val()
        ).then(() => {
            $("#submitBtn").prop('disabled', false);
        });
    });
}