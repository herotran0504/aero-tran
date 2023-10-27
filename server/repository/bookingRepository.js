const BookingDao = require("../database/dao/bookingDao");

class BookingRepository {

    constructor() {
        this.BookingDao = new BookingDao();
    }

    // get all bookings
    async getAllBookings() {
        return this.BookingDao.getAllBookings();
    }

    // get booking by id
    async getBookingById(id) {
        return this.BookingDao.getBookingById(id);
    }

    // get booking by user id
    async getBookingByUserId(id) {
        return this.BookingDao.getBookingByUserId(id);
    }

    // add new booking
    async addBooking(booking) {
        return this.BookingDao.addBooking(booking);
    }

    // delete booking by id
    async deleteBookingById(id) {
        return this.BookingDao.deleteBookingById(id);
    }

    // update booking by id
    async updateBookingById(id,booking) {
        return this.BookingDao.updateBookingById(id,booking);
    }
}

module.exports = BookingRepository
