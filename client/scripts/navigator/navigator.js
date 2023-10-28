export const Navigator = {
    navigateTo: (url) => {
        window.location.href = url;
    },
    navigateToHomePage() {
        this.navigateTo('/client/pages/index.html');
    },
    navigateToLoginPage() {
        this.navigateTo('/client/pages/login.html');
    },
    navigateToBookingDetails() {
        this.navigateTo('/client/pages/bookingdetails.html');
    }
};