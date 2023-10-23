const FlightRepository = require("../repository/flightRepository");

class FlightController {

    async getAllFlights(req, res, next) {
        console.log("getAllFlights");
        let result = await (new FlightRepository()).getAllFlights();
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({message: "Flights not found"});
        }
    }

    async getFlightById(req, res, next) {
        console.log("getFlightById" + req.params.id);
        let id = req.params.id;
        let result = await (new FlightRepository()).getFlightById(id);
        console.log(result);
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({message: "Flight not found"});
        }
    }
    async createFlight(req, res, next) {}
    async deleteFlight(req, res, next) {}
    async updateFlight(req, res, next) {}
    async findFlights(req, res, next) {
        console.log(`findFlights request: `, req.query);
        let result = await (new FlightRepository()).findFlights(req.query);
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(400).json({message: "find Flights  not found"});
        }
    }

}

module.exports = FlightController;