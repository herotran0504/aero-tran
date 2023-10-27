import {HomeView} from "../view/homeView.js";
import {Storage} from "../storage/storage.js";
import {Navigator} from "../navigator/navigator.js";

export class HomeController {

    constructor(view) {
        this.view = view;
    }

    checkUserState() {
        if (Storage.hasValidToken()) {
            this.view.showUserControls();
        } else {
            this.view.showGuestControls();
        }
    }

    handleLogout() {
        Storage.clearToken();
        Navigator.navigateToHomePage()
    }

    static create() {
        return new HomeController(new HomeView());
    }

}