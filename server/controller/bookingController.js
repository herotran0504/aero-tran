const BookingRepository = require("../repository/bookingRepository");

class BookingController {

    async getAllBookings(req, res, next) {
        res.status(200).json(await (new BookingRepository()).getAllBookings());
    }

    //get booking by id
    async getBookingById(req, res, next) {
        res.status(200).json(await (new BookingRepository()).getBookingById(req.params.id));
    }

    //add new booking
    async addBooking(req, res, next) {
        console.log(req.query);
        res.status(200).json(await (new BookingRepository()).addBooking(req.query));
    }

    //delete booking by id
    async deleteBookingById(req, res, next) {
        res.status(200).json(await (new BookingRepository()).deleteBookingById(req.params.id));
    }
    //update booking by id
    // async updateBookingById(req, res, next) {
    //     console.log(req.query);
    //     res.status(200).json(await (new BookingRepository()).updateBookingById(req.params.id,req.query));
    // }

}

module.exports = BookingController;