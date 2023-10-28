import {BookingController} from "./controller/bookingController.js";

const controller = BookingController.create();

window.onload = async function () {
    await controller.getBookingByUserId();
    $("#logout").on("click", () => {
        controller.handleLogout();
    });
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
