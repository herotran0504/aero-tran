import {BookingController} from "./controller/bookingController.js";

const controller = BookingController.create();

window.onload = async function () {
    // const queryString = window.location.search;
    // console.log(queryString);
    // const urlParams = new URLSearchParams(queryString);
    // console.log(urlParams[1]);
    // let id = urlParams.get('flightId');
    // let isEco = urlParams.get('isEco');
    // console.log(id);
    //get all bookings by current user id
    await controller.getUserInforByLastBooking();
}

// window.onDelete = async function(id) {
//     console.log(id);
//     await controller.deleteBookingById(id);
//     window.location.reload();
// }

// window.onUpdate = async function(id) {
//     console.log(id);
//     window.location.href = `/client/pages/bookingupdate.html?id=${id}`;
// }

// add booking
document.getElementById("btnAdd").addEventListener("click", async function () {
    let id = document.getElementById("idNew").value;
    let userId = document.getElementById("userIdNew").value;
    let flightId = document.getElementById("flightIdNew").value;
    let bookingDate = document.getElementById("bookingDateNew").value;
    let firstName = document.getElementById("firstNameNew").value;
    let lastName = document.getElementById("lastNameNew").value;
    let email = document.getElementById("emailNew").value;
    let status = document.getElementById("statusNew").value;
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