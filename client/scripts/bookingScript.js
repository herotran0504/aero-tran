import {BookingController} from "./controller/bookingController.js";

const controller = BookingController.create();

window.onload = async function () {
    // await controller.getBookings();
    let id = document.getElementById("bookingId").value;
    await controller.getBookingById(id);
}

// get booking by id
document.getElementById("btnGet").addEventListener("click", async function () {
    let id = document.getElementById("bookingId").value;
    await controller.getBookingById(id);
});

// delete booking by id
document.getElementById("btnDelete").addEventListener("click", async function () {
    let id = document.getElementById("bookingIdDelete").value;
    await controller.deleteBookingById(id);
});

// add booking
document.getElementById("btnAdd").addEventListener("click", async function () {
    let id = document.getElementById("newBookingId").value;
    let userId = document.getElementById("newUserId").value;
    let flightId = document.getElementById("newFlightId").value;
    let bookingDate = document.getElementById("newBookingDate").value;
    let firstName = document.getElementById("newFirstName").value;
    let lastName = document.getElementById("newLastName").value;
    let email = document.getElementById("newEmail").value;
    let status = document.getElementById("newStatus").value;
    let booking = {
        "id": id,
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
    await controller.addBooking(booking);   
});

// update booking
document.getElementById("btnUpdate").addEventListener("click", async function () {
    let id = document.getElementById("bookingIdUpdate").value;
    let userId = document.getElementById("userIdUpdate").value;
    let flightId = document.getElementById("flightIdUpdate").value;
    let bookingDate = document.getElementById("bookingDateUpdate").value;
    let firstName = document.getElementById("firstNameUpdate").value;
    let lastName = document.getElementById("lastNameUpdate").value;
    let email = document.getElementById("emailUpdate").value;
    let status = document.getElementById("statusUpdate").value;
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
});