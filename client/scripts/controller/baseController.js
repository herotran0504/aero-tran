import {Storage} from "../storage/storage.js";
import {Navigator} from "../navigator/navigator.js";

export class BaseController {

    handleLogout() {
        Storage.clearToken();
        Navigator.navigateToHomePage()
    }

}