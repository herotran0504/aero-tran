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

    static create() {
        return new UserInfoController(new UserInfoView(), new UserRepository());
    }

    async update(username, email, password, firstName, lastName, dob, address) {
        try {
            await this.repository.requestUpdateUserInfo(username, email, password, firstName, lastName, dob, address);
            this.view.showUpdateInfoSuccess();
        } catch (error) {
            console.log(error);
            this.view.showError();
        }
    }
}