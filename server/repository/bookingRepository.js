const BookingDao = require("../database/dao/bookingDao");

class BookingRepository {

    constructor() {
        this.bookingDao = new BookingDao();
    }

    // get all bookings
    async getAllBookings() {
        return this.bookingDao.getAllBookings();
    }

    // get booking by id
    async getBookingById(id) {
        return this.bookingDao.getBookingById(id);
    }

    // get booking by user id
    async getAllBookingByUserId(id) {
        return this.bookingDao.getAllBookingByUserId(id);
    }

    async getLastBookingByUserId(id) {
        return this.bookingDao.getLastBookingByUserId(id);
    }

    // add new booking
    async addBooking(booking) {
        return this.bookingDao.addBooking(booking);
    }

    // delete booking by id
    async deleteBookingById(id) {
        return this.bookingDao.deleteBookingById(id);
    }

    // update booking by id
    async updateBookingById(id,booking) {
        return this.bookingDao.updateBookingById(id,booking);
    }
}

module.exports = BookingRepository
