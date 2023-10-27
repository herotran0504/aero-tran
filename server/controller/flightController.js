const FlightRepository = require("../repository/flightRepository");

const flightRepository = new FlightRepository()

class FlightController {

    async getAllFlights(req, res, next) {
        console.log("getAllFlights");
        let result = await flightRepository.getAllFlights();
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({message: "Flights not found"});
        }
    }

    async getFlightById(req, res, next) {
        console.log("getFlightById" + req.params.id);
        let id = req.params.id;
        let result = await flightRepository.getFlightById(id);
        console.log(result);
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({message: "Flight not found"});
        }
    }
    async createFlight(req, res, next) {}
    async deleteFlight(req, res, next) {}
    async updateAvailableSeatsById(req, res, next) {
        console.log("updateFlightById" + req.params.id);
        const result = await flightRepository.updateAvailableSeatsById(req.params.id, req.body);
        if(result) {
            res.status(200).json({message: "Update seats success"});
        } else {
            res.status(400).json({message: "Update seats fail"});
        }
    }
    async findFlights(req, res, next) {
        console.log(`findFlights request: `, req.query);
        let result = await flightRepository.findFlights(req.query);
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(400).json({message: "find Flights  not found"});
        }
    }

}

module.exports = FlightController;