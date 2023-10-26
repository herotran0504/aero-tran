import {HomeController} from "./controller/homeController.js";

const homeController = HomeController.create();

window.onload = async function () {
    homeController.checkUserState();
    await addEventListeners()
}

async function addEventListeners() {
    document.getElementById("logout").addEventListener("click", () => {
        homeController.handleLogout();
    });
}