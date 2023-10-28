import {Storage} from "../storage/storage.js";

const URL = "http://localhost:5001";

export class BookingRepository {

    async requestBookingById(id) {
        const url = `${URL}/bookings/${id}`;

        const requestOptions = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": Storage.retrieveToken()
            },
        };

        const response = await fetch(url, requestOptions);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Bookings request failed with status ${response.status}`);
        }
    }

    async requestAllBookingsByUser() {
        const url = `${URL}/bookings/all`;

        const requestOptions = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": Storage.retrieveToken()
            },
        };

        const response = await fetch(url, requestOptions);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Bookings request failed with status ${response.status}`);
        }
    }

    async requestLastBookingByUser() {
        const url = `${URL}/bookings/user`;

        const requestOptions = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": Storage.retrieveToken()
            },
        };

        const response = await fetch(url, requestOptions);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Bookings request failed with status ${response.status}`);
        }
    }

    async deleteBookingById(id) {
        const url = `${URL}/bookings/${id}`;

        const requestOptions = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": Storage.retrieveToken()
            },
        };

        const response = await fetch(url, requestOptions);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Bookings request failed with status ${response.status}`);
        }
    }

    async addBooking(booking) {
        const url = `${URL}/bookings`;

        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": Storage.retrieveToken()
            },
            body: JSON.stringify(booking)
        };

        const response = await fetch(url, requestOptions);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Bookings request failed with status ${response.status}`);
        }
    }

    async updateBooking(booking) {
        const url = `${URL}/bookings/${booking.id}`;

        const requestOptions = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": Storage.retrieveToken()
            },
            body: JSON.stringify(booking)
        };

        const response = await fetch(url, requestOptions);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Bookings request failed with status ${response.status}`);
        }
    }
}