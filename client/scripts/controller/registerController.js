import {UserRepository} from "../repository/userRepository.js"
import {RegisterView} from "../view/registerView.js"
import {Navigator} from "../navigator/navigator.js"

export class RegisterController {

    constructor(view, repository) {
        this.view = view;
        this.repository = repository;
    }

    async register(username, email, password, firstName, lastName, dob, address) {
        try {
            await this.repository.requestRegister(username, email, password, firstName, lastName, dob, address);
            this.view.showRegisterSuccess();
            Navigator.navigateToLoginPage();
        } catch (error) {
            this.view.showRegisterError();
        }
    }

    static create() {
        return new RegisterController(new RegisterView(), new UserRepository());
    }

}