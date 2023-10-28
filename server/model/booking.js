class Booking {
    constructor(id, userId, flightId, bookingDate, passengerInfo, status) {
        this.id = id;
        this.userId = userId;
        this.flightId = flightId;
        this.bookingDate = bookingDate;
        this.passengerInfo = passengerInfo;
        this.status = status;
    }
}

module.exports = Booking;