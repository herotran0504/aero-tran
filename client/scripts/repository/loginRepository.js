const URL = "http://localhost:5001/users";

export class LoginRepository {

    getUserInfo() {
        return fetch(`${URL}`);
    }

}