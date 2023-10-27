export class BoookingView {

    showBooking(bookings) {
        // console.log(bookings[0]);
        let body = document.getElementById('tbody');
        let data = bookings[0];
        let passengerInfo = data.passengerInfo;
        console.log(data);
        document.getElementById('bookingId').value = data.id;
        document.getElementById('userId').value = data.userId;
        document.getElementById('flightId').value = data.flightId;
        document.getElementById('bookingDate').value = data.bookingDate;
        document.getElementById('firstName').value = passengerInfo.firstName;
        document.getElementById('lastName').value = passengerInfo.lastName;
        document.getElementById('email').value = passengerInfo.email;
        document.getElementById('status').value = data.status;
        // let body = document.getElementById('tbody');
        // let html = body.innerHTML;
        // html += `
        //             <tr>
        //                 <td>id:</td>
        //                 <td>${bookings.id}</td>
        //             </tr>
        //              <tr>
        //                 <td>userId:</td>
        //                 <td>${bookings.id}</td>
        //             </tr>
        //             <tr>
        //                 <td>FlightId:</td>
        //                 <td>${bookings.flightId}</td>
        //             </tr>
        //         `;
        // body.innerHTML = html;
    }

    showError() {
        alert("Fetch user info error, we're notified")
    }

}