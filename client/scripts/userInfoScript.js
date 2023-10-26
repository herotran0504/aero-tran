import {UserInfoController} from "./controller/userInfoController.js";

const controller = UserInfoController.create();

window.onload = async function () {
    await controller.getUserInfo();
}