import {FlightView} from "../view/flightView.js";
import {FlightRepository} from "../repository/flightRepository.js";
import {Navigator} from "../navigator/navigator.js";
import {Storage} from "../storage/storage.js";
import {BaseController} from "./baseController.js";

export class FlightController extends BaseController {

    constructor(flightView, flightRepository) {
        super();
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

    async searchFlight(fromCity, toCity, fromDate, toDate) {
        try {
            const result = await this.flightRepository.searchFlight(fromCity, toCity, fromDate, toDate);
            if (result.length > 0) {
                this.flightView.showFlightSearchSuccess(result, (url) => {
                    if (Storage.hasValidToken()) {
                        Navigator.navigateTo(url);
                    } else {
                        Navigator.navigateToLoginPage();
                    }
                });
            } else {
                this.flightView.showFlightSearchFail();
            }
        } catch (error) {
            console.log(error);
            this.flightView.showFlightSearchFail();
        }
    }

    static create() {
        return new FlightController(new FlightView(), new FlightRepository());
    }
}