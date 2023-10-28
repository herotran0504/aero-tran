import {BookingController} from "./controller/bookingController.js";

const controller = BookingController.create();

window.onload = async function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let flightId = urlParams.get('flightId');
    urlParams.get('isEco');

    //get all bookings by current user id
    await controller.getUserInforByLastBooking(flightId);
    $("#logout").on("click", () => {
        controller.handleLogout();
    });
}


// add booking
document.getElementById("btnAdd").addEventListener("click",  function (event) {
    event.preventDefault();
    let userId = document.getElementById("userIdNew").value;
    let flightId = document.getElementById("flightIdNew").value;
    let bookingDate = document.getElementById("bookingDateNew").value;
    let firstName = document.getElementById("firstNameNew").value;
    let lastName = document.getElementById("lastNameNew").value;
    let email = document.getElementById("emailNew").value;
    let status = document.getElementById("statusNew").value;
    let booking = {
        "id": 1,
        "userId": userId,
        "flightId": flightId,
        "bookingDate": bookingDate,
        "passengerInfo": {
            "firstName": firstName,
            "lastName": lastName,
            "email": email
        },
        "status": status
    };
    controller.addBooking(booking);
    alert("Booking successfully!");  
    window.location.href = `/client/pages/index.html`; 
});