const {ObjectId} = require('mongodb');

class BookingDao {

    constructor(db) {
        this.bookings = db.collection('bookings');
    }

    async createBooking(booking) {
        const result = await this.bookings.insertOne(booking);
        return result.insertedId;
    }

    async findBookingById(bookingId) {
        return this.bookings.findOne({_id: new ObjectId(bookingId)});
    }

    async findBookingsByUserId(userId) {
        return this.bookings.find({user_id: new ObjectId(userId)}).toArray();
    }
}

module.exports = BookingDao;