export class HomeView {

    showUserControls() {
        document.getElementById("login").style.display = 'none';
        document.getElementById("userInfo").style.display = 'block';
        document.getElementById("logout").style.display = 'block';
    }

    showGuestControls() {
        document.getElementById("login").style.display = 'block';
        document.getElementById("userInfo").style.display = 'none';
        document.getElementById("logout").style.display = 'none';
    }

}