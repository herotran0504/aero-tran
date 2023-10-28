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
    $("#logout").on("click", () => {
        controller.handleLogout();
    });
}


// update booking
document.getElementById("btnUpdate").addEventListener("click", async function () {
    let id = document.getElementById("idForUpdate").value;
    let userId = document.getElementById("userIdForUpdate").value;
    let flightId = document.getElementById("flightIdForUpdate").value;
    let bookingDate = document.getElementById("bookingDateForUpdate").value;
    let firstName = document.getElementById("firstNameForUpdate").value;
    let lastName = document.getElementById("lastNameForUpdate").value;
    let email = document.getElementById("emailForUpdate").value;
    let status = document.getElementById("status").value;
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
    await controller.updateBooking(booking);   
    alert("Booking update successfully!");
    window.location.href = `/client/pages/bookingdetails.html`;
});