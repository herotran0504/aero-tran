import { FlightView } from "../view/flightView.js";
import { FlightRepository } from "../repository/flightRepository.js";
import { Navigator } from "../navigator/navigator.js";
import { Storage } from "../storage/storage.js";


export class FlightController {

    constructor(flightView, flightRepository) {
        this.flightView = flightView;
        this.flightRepository = flightRepository;
    }

    async searchFlight(fromCity, toCity, departure, arival) {
        try {
            let result = this.flightRepository.searchFlight(fromCity, toCity, departure, arival);
        } catch (error) {
            console.log(error);
            this.flightView.showFlightSearchFail();
        }
    }
    static create() {
        return new FlightController(new FlightView(), new FlightRepository());
    }
}