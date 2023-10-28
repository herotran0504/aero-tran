const BookingRepository = require("../repository/bookingRepository");
const repository = new BookingRepository();

class BookingController {

    async getAllBookings(req, res) {
        res.status(200).json(await repository.getAllBookings());
    }

    async getBookingById(req, res) {
        res.status(200).json(await repository.getBookingById(parseInt(req.params.id)));
    }

    async getAllBookingByUser(req, res) {
        let booking = await repository.getAllBookingByUserId(req.userId);
        res.status(200).json(booking);
    }

    async getLastBookingByUser(req, res) {
        let booking = await repository.getLastBookingByUserId(req.userId);
        res.status(200).json(booking);
    }

    async addBooking(req, res) {
        let body = req.body;
        body.userId = req.userId;
        res.status(200).json(await repository.addBooking(body));
    }

    async deleteBookingById(req, res) {
        res.status(200).json(await repository.deleteBookingById(parseInt(req.params.id)));
    }

    async updateBookingById(req, res) {
        res.status(200).json(await repository.updateBookingById(parseInt(req.params.id), req.body));
    }

}

module.exports = BookingController;