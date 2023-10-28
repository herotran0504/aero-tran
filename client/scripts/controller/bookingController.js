import {BookingRepository} from "../repository/bookingRepository.js";
import {BookingView} from "../view/bookingView.js";
import {BaseController} from "./baseController.js";
import {Navigator} from "../navigator/navigator.js";

export class BookingController extends BaseController {

    constructor(view, repository) {
        super();
        this.view = view;
        this.repository = repository;
    }

    // get booking by user id
    async getBookingByUserId() {
        try {
            let result = await this.repository.requestBookingByUserId();
            this.view.showBookings(result);
        } catch (error) {
            console.log(error);
            this.view.showError();
        }
    }

    async getBookingById(id) {
        try {
            let result = await this.repository.requestBookingById(id);
            console.log(result);
            this.view.showBookingDetail(result);
        } catch (error) {
            console.log(error);
            this.view.showError();
        }
    }

    async getUserInforByLastBooking(flightId) {
        try {
            let id = localStorage.getItem("userId");
            let result = await this.repository.requestBookingByUserId(id);
            let booking = result[0];
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = yyyy + '-' + mm + '-' + dd;
            //check if can not any booking
            if (!booking) {
                booking = {
                    "id": null,
                    "userId": id,
                    "flightId": null,
                    "bookingDate": today,
                    "passengerInfo": {
                        "firstName": null,
                        "lastName": null,
                        "email": null
                    },
                    "status": null
                };
            }
            booking.bookingDate = today;
            booking.flightId = flightId;
            booking.status = "pending";
            this.view.showUserDetail(booking);
        } catch (error) {
            console.log(error);
            this.view.showError();
        }
    }

// delete booking by id
    async deleteBookingById(id) {
        try {
            let result = await this.repository.deleteBookingById(id);
            console.log(result);
            // this.view.showBooking(result);
        } catch (error) {
            console.log(error);
            this.view.showError();
        }
    }

    // add booking
    async addBooking(booking) {
        try {
            await this.repository.addBooking(booking);
            Navigator.navigateToBookingDetails();
        } catch (error) {
            console.log(error);
            this.view.showError();
        }
    }

    // update booking
    async updateBooking(booking) {
        try {
            await this.repository.updateBooking(booking);
            alert("Booking update successfully!");
            Navigator.navigateToBookingDetails();
        } catch (error) {
            console.log(error);
            this.view.showError();
        }
    }

    static create() {
        return new BookingController(new BookingView(), new BookingRepository());
    }

}