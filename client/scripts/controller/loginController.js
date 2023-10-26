import {LoginRepository} from "../repository/loginRepository.js"
import {LoginView} from "../view/loginView.js"
import {Navigator} from "../navigator/navigator.js"
import {Storage} from "../storage/storage.js";

export class LoginController {

    constructor(loginView, loginRepository) {
        this.loginView = loginView;
        this.loginRepository = loginRepository;
    }

    async login(email, password) {
        try {
            let result = await this.loginRepository.requestLogin(email, password);
            this.loginView.showLoginSuccess(result.token);
            Storage.storeToken(result.token);
            Navigator.navigateToHomePage();
        } catch (error) {
            console.log(error);
            this.loginView.showLoginError();
        }
    }

    static create() {
        return new LoginController(new LoginView(), new LoginRepository());
    }

}