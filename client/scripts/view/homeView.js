export class HomeView {

    showUserControls() {
        $('#login').hide();
        $('#userInfo').show();
        $('#logout').show();
        $('#bookings').show();
    }

    showGuestControls() {
        $('#login').show();
        $('#userInfo').hide();
        $('#logout').hide();
        $('#bookings').hide();
    }

}