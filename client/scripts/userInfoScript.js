import {UserInfoController} from "./controller/userInfoController.js";

const controller = UserInfoController.create();

window.onload = async function () {
    await controller.getUserInfo();
    await addEventListeners();
}

async function addEventListeners() {
    $("#form").on("submit", function (event) {
        event.preventDefault();
        $("#submitBtn").prop('disabled', true);
        controller.update(
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