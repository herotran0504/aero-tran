import {BookingController} from "./controller/bookingController.js";

const controller = BookingController.create();

window.onload = async function () {

    //get all bookings by current user id
    await controller.getBookingByUserId();
}

window.onDelete = async function(id) {
    console.log(id);
    await controller.deleteBookingById(id);
    window.location.reload();
}

window.onUpdate = async function(id) {
    console.log(id);
    window.location.href = `/client/pages/bookingupdate.html?id=${id}`;
}

// // delete booking by id
// document.getElementById("btnDelete").addEventListener("click", async function () {
//     let id = document.getElementById("btnDelete").value;
//     console.log(id);
//     await controller.deleteBookingById(id);
// });



// // update booking
// document.getElementById("btnUpdate").addEventListener("click", async function () {
//     let id = document.getElementById("bookingIdUpdate").value;
//     let userId = document.getElementById("userIdUpdate").value;
//     let flightId = document.getElementById("flightIdUpdate").value;
//     let bookingDate = document.getElementById("bookingDateUpdate").value;
//     let firstName = document.getElementById("firstNameUpdate").value;
//     let lastName = document.getElementById("lastNameUpdate").value;
//     let email = document.getElementById("emailUpdate").value;
//     let status = document.getElementById("statusUpdate").value;
//     let booking = {
//         "id": parseInt(id),
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
//     await controller.updateBooking(booking);   
// });