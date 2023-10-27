import { BookingRepository } from "../repository/bookingRepository.js";
import { BoookingView } from "../view/bookingView.js";
import {UserRepository} from "../repository/userRepository.js";

export class BookingController {

    constructor(view, repository, userRepository) {
        this.view = view;
        this.repository = repository;
        this.userRepository = userRepository
    }

        // get booking by user id
    async getBookingByUserId() {
        try {
            let userInfo = await this.userRepository.requestUserInfo();
            let result = await this.repository.requestBookingByUserId();
            // console.log(result);
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

    async getUserInforByLastBooking(flightId, isEco) {
        try {
            let id = 1;
            let result = await this.repository.requestBookingByUserId(id);
            let booking = result[0];
            console.log(booking);
            console.log(result);
            booking.flightId = flightId;
            booking.status = "pending";
            this.view.showUserDetail(booking);
        } catch (error) {
            console.log(error);
            this.view.showError();
        }
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
        return new BookingController(new BoookingView(), new BookingRepository(), new UserRepository());
    }

}