export class HomeView {

    showUserControls() {
        $('#login').hide();
        $('#userInfo').show();
        $('#logout').show();
    }

    showGuestControls() {
        $('#login').show();
        $('#userInfo').hide();
        $('#logout').hide();
    }

}