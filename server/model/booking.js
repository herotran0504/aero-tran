class Booking {
    constructor(_id, userId, flightId, bookingDate, passengerInfo, status) {
        this._id = _id;
        this.userId = userId;
        this.flightId = flightId;
        this.bookingDate = bookingDate;
        this.passengerInfo = passengerInfo;
        this.status = status;
    }
}

module.exports = Booking;