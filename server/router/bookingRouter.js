const express = require("express");
const BookingController = require("../controller/bookingController");
let controller = new BookingController();

const router = express.Router();

// get all bookings
router.get("/", controller.getAllBookings);

//get booking by user id
router.get("/all", controller.getAllBookingByUser);
router.get("/user", controller.getLastBookingByUser);

//get booking by id
router.get("/:id", controller.getBookingById);

//add new booking
router.post("/", controller.addBooking);

//delete booking by id
router.delete("/:id", controller.deleteBookingById);

//update booking by id
router.put("/:id", controller.updateBookingById);

module.exports = router;