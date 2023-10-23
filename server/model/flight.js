class Flight {
    constructor(_id, flightNumber, departureCity, arrivalCity, departureTime, arrivalTime, duration, aircraftType, price, seats) {
        this._id = _id;
        this.flightNumber = flightNumber;
        this.departureCity = departureCity;
        this.arrivalCity = arrivalCity;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.duration = duration;
        this.aircraftType = aircraftType;
        this.price = price;
        this.seats = seats;
    }
}

module.exports = Flight;