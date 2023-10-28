const FlightRepository = require("../repository/flightRepository");

const flightRepository = new FlightRepository()

class FlightController {

    async getAllFlights(req, res) {
        let result = await flightRepository.getAllFlights();
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({message: "Flights not found"});
        }
    }

    async getFlightById(req, res) {
        let id = req.params.id;
        let result = await flightRepository.getFlightById(id);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({message: "Flight not found"});
        }
    }

    async updateAvailableSeatsById(req, res) {
        const result = await flightRepository.updateAvailableSeatsById(req.params.id, req.body);
        if (result) {
            res.status(200).json({message: "Update seats success"});
        } else {
            res.status(400).json({message: "Update seats fail"});
        }
    }

    async findFlights(req, res) {
        let result = await flightRepository.findFlights(req.query);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(400).json({message: "find Flights  not found"});
        }
    }

}

module.exports = FlightController;