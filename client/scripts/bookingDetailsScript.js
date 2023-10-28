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
