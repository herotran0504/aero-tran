import {BaseView} from "./baseView.js";

export class UserInfoView extends BaseView {

    showUserInfo(user) {
        $('#userId').val(`${user.userId}`);
        $('#userName').val(`${user.username}`);
        $('#email').val(`${user.email}`);
        $('#firstName').val(`${user.firstName}`);
        $('#lastName').val(`${user.lastName}`);
        $('#dob').val(`${user.dob}`);
        $('#address').val(`${user.address}`);
    }

    showUpdateInfoSuccess() {
        alert("Update successfully!");
    }

    showError() {
        alert("Something went wrong!");
    }

}