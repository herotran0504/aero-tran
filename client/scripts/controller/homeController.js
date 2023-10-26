import {HomeView} from "../view/homeView.js";
import {Storage} from "../storage/storage.js";
import {Navigator} from "../navigator/navigator.js";

export class HomeController {

    constructor(homeView) {
        this.homeView = homeView;
    }

    checkUserState() {
        if (Storage.hasValidToken()) {
            this.homeView.showUserControls();
        } else {
            this.homeView.showGuestControls();
        }
    }

    handleLogout() {
        Storage.clearToken();
        Navigator.navigateToLoginPage()
    }

    static create() {
        return new HomeController(new HomeView());
    }

}