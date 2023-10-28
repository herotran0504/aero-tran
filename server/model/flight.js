class Flight {
    constructor(
        id,
        flightNumber,
        departureCity,
        arrivalCity,
        departureDate,
        departureTime,
        arrivalDate,
        arrivalTime,
        duration,
        aircraftType,
        ecoSeats,
        availableEcoSeats,
        businessSeats,
        availableBSeats,
        businessPrice,
        ecoPrice,
        isDomestic
    ) {
        this.id = id;
        this.flightNumber = flightNumber;
        this.departureCity = departureCity;
        this.arrivalCity = arrivalCity;
        this.departureDate = departureDate;
        this.departureTime = departureTime;
        this.arivalDate = arrivalDate;
        this.arrivalTime = arrivalTime;
        this.duration = duration;
        this.aircraftType = aircraftType;
        this.ecoSeats = ecoSeats;
        this.availableEcoSeats = availableEcoSeats;
        this.businessSeats = businessSeats;
        this.availlableBSeats = availableBSeats;
        this.businessPrice = businessPrice;
        this.ecoPrice = ecoPrice;
        this.isDomestic = isDomestic;
    }
}

module.exports = Flight;