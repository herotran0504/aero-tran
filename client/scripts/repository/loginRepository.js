const URL = "http://localhost:5001";

export class LoginRepository {

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
}