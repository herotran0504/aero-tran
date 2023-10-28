import {UserRepository} from "../repository/userRepository.js"
import {LoginView} from "../view/loginView.js"
import {Navigator} from "../navigator/navigator.js"
import {Storage} from "../storage/storage.js";

export class LoginController {

    constructor(view, repository) {
        this.view = view;
        this.repository = repository;
    }

    async login(email, password) {
        try {
            let result = await this.repository.requestLogin(email, password);
            Storage.storeToken(result.token);
            Navigator.navigateToHomePage();
        } catch (error) {
            this.view.showLoginError();
        }
    }

    static create() {
        return new LoginController(new LoginView(), new UserRepository());
    }

}