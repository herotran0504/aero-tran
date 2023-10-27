import { BookingRepository } from "../repository/bookingRepository.js";
import { BoookingView } from "../view/bookingView.js";

export class BookingController {

    constructor(view, repository) {
        this.view = view;
        this.repository = repository;
    }

    async getBookings() {
        try {
            let result = await this.repository.requestBookings();
            console.log(result);
            this.view.showBooking(result);
        } catch (error) {
            console.log(error);
            this.view.showError();
        }
    }

    async getBookingById(id) {
        try {
            let result = await this.repository.requestBookingById(id);
            console.log(result);
            this.view.showBooking(result);
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
            let result = await this.repository.addBooking(booking);
            console.log(result);
        } catch (error) {
            console.log(error);
            this.view.showError();
        }
    }

    // update booking
    async updateBooking(booking) {
        try {
            let result = await this.repository.updateBooking(booking);
            console.log(result);
        } catch (error) {
            console.log(error);
            this.view.showError();
        }
    }

    static create() {
        return new BookingController(new BoookingView(), new BookingRepository());
    }

}