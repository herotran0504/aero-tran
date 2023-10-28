import {HomeView} from "../view/homeView.js";
import {Storage} from "../storage/storage.js";
import {BaseController} from "./baseController.js";

export class HomeController extends BaseController {

    constructor(view) {
        super();
        this.view = view;
    }

    checkUserState() {
        if (Storage.hasValidToken()) {
            this.view.showUserControls();
        } else {
            this.view.showGuestControls();
        }
    }

    static create() {
        return new HomeController(new HomeView());
    }

}