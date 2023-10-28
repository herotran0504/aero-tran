const BaseDao = require('./baseDao');
const initBookingId = 204800;
const bookings = [];

class BookingDao extends BaseDao {
    constructor() {
        super();
    }

    async getAllBookings() {
        return bookings;
    }

    async getBookingById(id) {
        return bookings.find(b => b.id === id);
    }

    async getAllBookingByUserId(userId) {
        return bookings.filter(b => b.userId === userId);
    }

    async getLastBookingByUserId(userId) {
        let bookingList = bookings.findLast(b => b.userId === userId);
        if (!bookingList) {
            return {
                "id": null,
                "userId": userId,
                "flightId": null,
                "bookingDate": null,
                "passengerInfo": {"firstName": null, "lastName": null, "email": null},
                "status": null
            };
        }
        return bookingList;
    }

    async addBooking(booking) {
        await console.log(`booking::${booking}`)
        let lastId;
        if (bookings.length === 0) {
            lastId = initBookingId
        } else {
            lastId = Math.max(bookings.map(b => parseInt(b.id))) + 1;
        }
        booking.id = lastId;
        bookings.push(booking);
        await console.log(bookings);
        return booking.id;
    }

    async deleteBookingById(id) {
        let booking;
        const index = bookings.findIndex(b => b.id === id);
        if (index > -1) {
            booking = bookings[index];
            bookings.splice(index, 1)
        }
        await console.log(bookings);
        return booking;
    }

    async updateBookingById(id, booking) {
        let updateBooking;
        const index = bookings.findIndex(b => b.id === id);
        if (index > -1) {
            updateBooking = bookings[index];
            updateBooking.status = booking.status;
            updateBooking.passengerInfo = booking.passengerInfo;
        }
        await console.log(bookings);
        return updateBooking;
    }

}

module.exports = BookingDao;