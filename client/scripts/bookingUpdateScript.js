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
}

// // get booking by id
// document.getElementById("btnGet").addEventListener("click", async function () {
//     let id = document.getElementById("bookingId").value;
//     await controller.getBookingById(id);
// });

// // delete booking by id
// document.getElementById("btnDelete").addEventListener("click", async function () {
//     let id = document.getElementById("bookingIdDelete").value;
//     await controller.deleteBookingById(id);
// });

// // add booking
// document.getElementById("btnAdd").addEventListener("click", async function () {
//     let id = document.getElementById("newBookingId").value;
//     let userId = document.getElementById("newUserId").value;
//     let flightId = document.getElementById("newFlightId").value;
//     let bookingDate = document.getElementById("newBookingDate").value;
//     let firstName = document.getElementById("newFirstName").value;
//     let lastName = document.getElementById("newLastName").value;
//     let email = document.getElementById("newEmail").value;
//     let status = document.getElementById("newStatus").value;
//     let booking = {
//         "id": id,
//         "userId": userId,
//         "flightId": flightId,
//         "bookingDate": bookingDate,
//         "passengerInfo": {
//             "firstName": firstName,
//             "lastName": lastName,
//             "email": email
//         },
//         "status": status
//     };
//     await controller.addBooking(booking);   
// });

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
});