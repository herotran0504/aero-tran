class Flight {
    constructor(id, flightNumber,
        departureCity, arrivalCity,
        departureDate, departureTime,
        arivalDate, arrivalTime,
        duration, aircraftType,
        price, seats, isdomestic) {
        this.id = id;
        this.flightNumber = flightNumber;
        this.departureCity = departureCity;
        this.arrivalCity = arrivalCity;
        this.departureDate = departureDate;
        this.arivalDate = arivalDate;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.duration = duration;
        this.aircraftType = aircraftType;
        this.price = price;
        this.seats = seats;
        this.isdomestic = isdomestic;
    }
}

module.exports = Flight;