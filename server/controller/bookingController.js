const e = require("cors");
const BookingRepository = require("../repository/bookingRepository");

class BookingController {

    async getAllBookings(req, res, next) {
        res.status(200).json(await (new BookingRepository()).getAllBookings());
    }

    //get booking by id
    async getBookingById(req, res, next) {
        res.status(200).json(await (new BookingRepository()).getBookingById(parseInt(req.params.id)));
    }

    //get booking by user id
    async getBookingByUserId(req, res, next) {
        res.status(200).json(await (new BookingRepository()).getBookingByUserId(parseInt(req.params.id)));
    }

    //add new booking
    async addBooking(req, res, next) {
        console.log(req.body);
        res.status(200).json(await (new BookingRepository()).addBooking(req.body));
    }

    //delete booking by id
    async deleteBookingById(req, res, next) {
        res.status(200).json(await (new BookingRepository()).deleteBookingById(parseInt(req.params.id)));
    }
    //update booking by id
    async updateBookingById(req, res, next) {
        console.log(req.body);
        res.status(200).json(await (new BookingRepository()).updateBookingById(parseInt(req.params.id),req.body));
    }


}

module.exports = BookingController;