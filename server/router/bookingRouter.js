const express = require("express");
const BookingController = require("../controller/bookingController");
let bookingController = new BookingController();

const router = express.Router();

// get all bookings
router.get("/", bookingController.getAllBookings);
//get booking by id
router.get("/:id", bookingController.getBookingById);
//get booking by user id
router.get("/user/:id", bookingController.getBookingByUserId);
//add new booking
router.post("/", bookingController.addBooking);
//delete booking by id
router.delete("/:id", bookingController.deleteBookingById);
//update booking by id
router.put("/:id", bookingController.updateBookingById);








module.exports = router;