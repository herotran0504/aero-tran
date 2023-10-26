const express = require("express");
const FlightController = require("../controller/flightController");
let flightController = new FlightController();

const router = express.Router();

router.get('/', flightController.getAllFlights);
router.get('/search', flightController.findFlights);
router.get('/:id', flightController.getFlightById);

module.exports = router;