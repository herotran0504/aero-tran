export class UserInfoView {

    showUserInfo(user) {
        document.getElementById("userName").value = `${user.username}`;
        document.getElementById("email").value = `${user.email}`;
        document.getElementById("firstName").value = `${user.firstName}`;
        document.getElementById("lastName").value = `${user.lastName}`;
        document.getElementById("dob").value = `${user.dob}`;
        document.getElementById("address").value = `${user.address}`;
    }

    showError() {
        alert("Something went wrong");
    }

}