import {HomeController} from "./controller/homeController.js";

const controller = HomeController.create();

window.onload = async function () {
    controller.checkUserState();
    await addEventListeners()
}

async function addEventListeners() {
    document.getElementById("logout").addEventListener("click", () => {
        controller.handleLogout();
    });
}