const FlightDao = require("../database/dao/flightDao");

class FlightRepository {

    constructor() {
        this.flightDao = new FlightDao();
    }

    async getAllFlights() {
        return this.flightDao.getAllFlights();
    }
    async getFlightById(id) {
        return this.flightDao.getFlightById(id);
    }

    async findFlights(query) {
        return this.flightDao.findFlights(query);
    }

    async updateAvailableSeatsById(id, body) {
        return this.flightDao.updateAvailableSeatsById(id, body);
    }

}

module.exports = FlightRepository
