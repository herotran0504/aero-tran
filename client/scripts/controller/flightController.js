import {FlightView} from "../view/flightView.js";
import {FlightRepository} from "../repository/flightRepository.js";
import {Navigator} from "../navigator/navigator.js";
import {Storage} from "../storage/storage.js";

export class FlightController {

    constructor(flightView, flightRepository) {
        this.flightView = flightView;
        this.flightRepository = flightRepository;
    }

    async searchAllFlights() {
        try {
            let result = await this.flightRepository.searchAllFlights();
            this.flightView.loadAllFlights(result);
        } catch (error) {
            console.log(error);
            this.flightView.showFlightSearchFail();
        }
    }

    async searchFlight(fromCity, toCity, departure, arrival) {
        try {
            await this.flightRepository.searchFlight(fromCity, toCity, departure, arrival);
            this.flightView.showFlightSearchSuccess((url) => {
                if (Storage.hasValidToken()) {
                    Navigator.navigateTo(url);
                } else {
                    Navigator.navigateToLoginPage();
                }
            });
        } catch (error) {
            console.log(error);
            this.flightView.showFlightSearchFail();
        }
    }

    static create() {
        return new FlightController(new FlightView(), new FlightRepository());
    }
}