import {BookingController} from "./controller/bookingController.js";

const controller = BookingController.create();

window.onload = async function () {
    //get id from url
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    let id = urlParams.get('id');
    console.log(id);
    //get booking by id
    await controller.getBookingById(id);
    await addEventListeners();
}

async function addEventListeners() {
    $("#bookingForm").on("submit", function (event) {
        event.preventDefault();
        let id = $("#idForUpdate").val();
        let userId = $("#userIdForUpdate").val();
        let flightId = $("#flightIdForUpdate").val();
        let bookingDate = $("#bookingDateForUpdate").val();
        let firstName = $("#firstNameForUpdate").val();
        let lastName = $("#lastNameForUpdate").val();
        let email = $("#emailForUpdate").val();
        let status = $("#status").val();

        let booking = {
            "id": parseInt(id),
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
        controller.updateBooking(booking);
    });
    $("#logout").on("click", () => {
        controller.handleLogout();
    });
}