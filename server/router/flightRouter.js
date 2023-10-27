const express = require("express");
const FlightController = require("../controller/flightController");
let flightController = new FlightController();

const router = express.Router();

router.get('/', flightController.getAllFlights);
router.get('/search', flightController.findFlights);
router.get('/:id', flightController.getFlightById);
router.put('/:id', flightController.updateAvailableSeatsById);

module.exports = router;