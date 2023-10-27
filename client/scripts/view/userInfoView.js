export class UserInfoView {

    showUserInfo(user) {
        let body = document.getElementById('tbody');
        let html = body.innerHTML;
        html += `
                    <tr>
                        <td>Username:</td>
                        <td>${user.username}</td>
                    </tr>
                     <tr>
                        <td>Email:</td>
                        <td>${user.email}</td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td>${user.name}</td>
                    </tr>
                    <tr>
                        <td>DoB:</td>
                        <td>${user.dob}</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td>${user.address}</td>
                    </tr>
                `;
        body.innerHTML = html;
    }

    showError() {
        alert("Fetch user info error, we're notified")
    }

}