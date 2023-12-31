export class BookingView {

    showBookings(bookings) {
        let body = document.getElementById('tbody');
        let data = bookings.filter(b => b.id != null);

        //show booking data in table
        let html = body.innerHTML;
        for (let i = 0; i < bookings.length; i++) {
            html += ` 
                    <tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].userId}</td>
                    <td>${data[i].flightId}</td>
                    <td>${data[i].bookingDate}</td>
                    <td>
                        <ul>
                            <li>
                                <strong>Passenger :</strong>
                                <ul>
                                    <li>First Name: ${data[i].passengerInfo.firstName}</li>
                                    <li>Last Name: ${data[i].passengerInfo.lastName}</li>
                                    <li>Email: ${data[i].passengerInfo.email}</li>
                                </ul>
                            </li>
                        </ul>
                    </td>
                    <td>${data[i].status}</td>
                    <td>
                        <button class="btn btn-success btn-block" style="height: 100%" onClick="onUpdate(${data[i].id})">Update</button>
                        <button class="btn btn-danger btn-block" style="height: 100%" onclick="onDelete(${data[i].id})">Delete</button>
                    </td>
                </tr>`;
        }
        body.innerHTML = html;
    }

    showBookingDetail(booking) {
        document.getElementById("idForUpdate").value = booking.id;
        document.getElementById("userIdForUpdate").value = booking.userId;
        document.getElementById("flightIdForUpdate").value = booking.flightId;
        document.getElementById("bookingDateForUpdate").value = booking.bookingDate;
        document.getElementById("firstNameForUpdate").value = booking.passengerInfo.firstName;
        document.getElementById("lastNameForUpdate").value = booking.passengerInfo.lastName;
        document.getElementById("emailForUpdate").value = booking.passengerInfo.email;
        document.getElementById("status").value = booking.status;
    }

    showUserDetail(booking) {
        document.getElementById("userIdNew").value = booking.userId;
        document.getElementById("flightIdNew").value = booking.flightId;
        document.getElementById("bookingDateNew").value = booking.bookingDate;
        document.getElementById("firstNameNew").value = booking.passengerInfo.firstName;
        document.getElementById("lastNameNew").value = booking.passengerInfo.lastName;
        document.getElementById("emailNew").value = booking.passengerInfo.email;
        document.getElementById("statusNew").value = booking.status;
    }

    showError() {
        alert("Something went wrong!");
    }

}