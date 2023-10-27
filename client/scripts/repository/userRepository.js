import {Storage} from "../storage/storage.js";

const URL = "http://localhost:5001";

export class UserRepository {

    async requestLogin(email, password) {
        const url = `${URL}/login`;

        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password}),
        };

        const response = await fetch(url, requestOptions);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Login request failed with status ${response.status}`);
        }
    }

    async requestRegister(userData) {
        const url = `${URL}/register`;

        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userData),
        };

        const response = await fetch(url, requestOptions);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Register request failed with status ${response.status}`);
        }
    }

    async requestUserInfo() {
        const url = `${URL}/users`;

        const requestOptions = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": Storage.retrieveToken()
            },
        };

        const response = await fetch(url, requestOptions);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`User info request failed with status ${response.status}`);
        }
    }

    async requestUpdateUserInfo(userData) {
        const url = `${URL}/users`;

        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": Storage.retrieveToken()
            },
            body: JSON.stringify(userData),
        };

        const response = await fetch(url, requestOptions);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`User info request failed with status ${response.status}`);
        }
    }
}