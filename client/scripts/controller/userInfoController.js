import {UserInfoView} from "../view/UserInfoView.js";
import {UserRepository} from "../repository/userRepository.js";

export class UserInfoController {

    constructor(view, repository) {
        this.view = view;
        this.repository = repository;
    }

    async getUserInfo() {
        try {
            let result = await this.repository.requestUserInfo();
            this.view.showUserInfo(result.user);
        } catch (error) {
            console.log(error);
            this.view.showError();
        }
    }

    async update(firstName, lastName, dob, address) {
        try {
            const userData = {firstName, lastName, dob, address};
            await this.repository.requestUpdateUserInfo(userData);
            this.view.showUpdateInfoSuccess();
        } catch (error) {
            console.log(error);
            this.view.showError();
        }
    }

    static create() {
        return new UserInfoController(new UserInfoView(), new UserRepository());
    }
}