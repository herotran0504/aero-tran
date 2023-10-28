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
    async getAllBookingsByUser() {
        try {
            let result = await this.repository.requestAllBookingsByUser();
            this.view.showBookings(result);
        } catch (error) {
            console.log(error);
            this.view.showError();
        }
    }

    async getBookingById(id) {
        try {
            let result = await this.repository.requestBookingById(id);
            await console.log(result);
            this.view.showBookingDetail(result);
        } catch (error) {
            console.log(error);
            this.view.showError();
        }
    }

    async getLastBookingByUser(flightId) {
        try {
            let booking = await this.repository.requestLastBookingByUser();
            let today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            const yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;
            booking.bookingDate = today;
            booking.flightId = flightId;
            booking.status = "pending";
            this.view.showUserDetail(booking);
        } catch (error) {
            await console.log(error);
            this.view.showError();
        }
    }

    async deleteBookingById(id) {
        try {
            let result = await this.repository.deleteBookingById(id);
            console.log(result);
        } catch (error) {
            console.log(error);
            this.view.showError();
        }
    }

    async addBooking(booking) {
        try {
            await this.repository.addBooking(booking);
            alert("Booking successfully!");
            Navigator.navigateToBookingDetails();
        } catch (error) {
            console.log(error);
            this.view.showError();
        }
    }

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