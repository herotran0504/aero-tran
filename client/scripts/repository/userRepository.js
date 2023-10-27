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
            let data = response.json();
            console.log(data);
            return data;
        } else {
            throw new Error(`Login request failed with status ${response.status}`);
        }
    }

    async requestRegister(username, email, password, firstName, lastName, dob, address) {
        const url = `${URL}/register`;

        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, email, password, firstName, lastName, dob, address}),
        };

        const response = await fetch(url, requestOptions);
        if (response.ok) {
            let data = response.json();
            console.log(data);
            return data;
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
            let data = response.json();
            console.log(data);
            return data;
        } else {
            throw new Error(`User info request failed with status ${response.status}`);
        }
    }

    async requestUpdateUserInfo(username, email, password, firstName, lastName, dob, address) {
        const url = `${URL}/users`;

        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": Storage.retrieveToken()
            },
            body: JSON.stringify({username, email, password, firstName, lastName, dob, address}),
        };

        const response = await fetch(url, requestOptions);
        if (response.ok) {
            let data = response.json();
            console.log(data);
            return data;
        } else {
            throw new Error(`User info request failed with status ${response.status}`);
        }
    }
}