const BaseDao = require('./BaseDao');

class BookingDao extends BaseDao {
    constructor() {
        super();
    }

    async getAllBookings() {
        try {
            await this.connect();
            const bookingsCollection = this.db.collection('bookings');
            return await bookingsCollection.find({}).toArray();
        } finally {
            await this.disconnect();
        }
    }

    // get booking by id
    async getBookingById(id) {
        try {
            await this.connect();
            const bookingsCollection = this.db.collection('bookings');
            id = parseInt(id);
            return await bookingsCollection.find({id:id}).toArray();
        } finally {
            await this.disconnect();
        }
    }

    // add new booking
    async addBooking(booking) {
        try {
            await this.connect();
            const bookingsCollection = this.db.collection('bookings');
            return await bookingsCollection.insertOne(booking);
        } finally {
            await this.disconnect();
        }
    }

    // delete booking by id
    async deleteBookingById(id) {
        try {
            await this.connect();
            const bookingsCollection = this.db.collection('bookings');
            id = parseInt(id);
            return await bookingsCollection.deleteOne({id:id});
        } finally {
            await this.disconnect();
        }
    }

    // update booking by id
    async updateBookingById(id,booking) {
        try {
            await this.connect();
            const bookingsCollection = this.db.collection('bookings');
            id = parseInt(id);
            return await bookingsCollection.updateOne({id:id},{$set:booking});
        } finally {
            await this.disconnect();
        }
    }
}

module.exports = BookingDao;