import {Storage} from "../storage/storage.js";

const URL = "http://localhost:5001";

export class BookingRepository {

    async requestBookings() {
        const url = `${URL}/bookings`;

        const requestOptions = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": Storage.retrieveToken()
            },
        };

        const response = await fetch(url, requestOptions);
        if (response.ok) {
            let data = response.json();
            return data;
        } else {
            throw new Error(`Bookings request failed with status ${response.status}`);
        }
    }

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
            let data = response.json();
            return data;
        } else {
            throw new Error(`Bookings request failed with status ${response.status}`);
        }
    }

    // delete booking by id
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
            let data = response.json();
            return data;
        } else {
            throw new Error(`Bookings request failed with status ${response.status}`);
        }
    }

    // add booking
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
            let data = response.json();
            return data;
        } else {
            throw new Error(`Bookings request failed with status ${response.status}`);
        }
    }

    // update booking
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
            let data = response.json();
            console.log(data);
            return data;
        } else {
            // throw new Error(`Bookings request failed with status ${response.status}`);
        }
    }
}