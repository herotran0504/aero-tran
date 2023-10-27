import {HomeController} from "./controller/homeController.js";

const controller = HomeController.create();

window.onload = async function () {
    controller.checkUserState();
    await addEventListeners()
}

async function addEventListeners() {
    $("#logout").on("click", () => {
        controller.handleLogout();
    });
}