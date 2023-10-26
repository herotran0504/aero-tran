class Flight {
    constructor(
        id,
        flightNumber,
        departureCity,
        arrivalCity,
        departureDate,
        departureTime,
        arivalDate,
        arrivalTime,
        duration,
        aircraftType,
        ecoSeats,
        availableEcoSeats,
        businessSeats,
        availlableBSeats,
        businessPrice,
        ecoPrice,
        isdomestic
    ) {
        this.id = id;
        this.flightNumber = flightNumber;
        this.departureCity = departureCity;
        this.arrivalCity = arrivalCity;
        this.departureDate = departureDate;
        this.departureTime = departureTime;
        this.arivalDate = arivalDate;
        this.arrivalTime = arrivalTime;
        this.duration = duration;
        this.aircraftType = aircraftType;
        this.ecoSeats = ecoSeats;
        this.availableEcoSeats = availableEcoSeats;
        this.businessSeats = businessSeats;
        this.availlableBSeats = availlableBSeats;
        this.businessPrice = businessPrice;
        this.ecoPrice = ecoPrice;
        this.isdomestic = isdomestic;
    }
}

module.exports = Flight;