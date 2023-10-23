import {LoginRepository} from "../repository/loginRepository.js"
import {LoginView} from "../view/loginView.js"

export class LoginController {

    constructor(loginView, loginRepository) {
        this.loginView = loginView;
        this.loginRepository = loginRepository;
    }

    test() {
        console.log(this.loginView);
        console.log(this.loginRepository);
        alert("controller");
    }

    static create() {
        return new LoginController(new LoginView(), new LoginRepository());
    }

}