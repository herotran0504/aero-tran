export class BoookingView {

    showBookings(bookings) {
        // console.log(bookings[0]);
        let body = document.getElementById('tbody');
        console.log(bookings);
        // console.log(bookings[0]);
        // let data = bookings[0];
        let data = bookings;
        
        //show booking data in table
        let html = body.innerHTML;
        for(let i = 0; i < bookings.length; i++) {
            html+= ` 
                    <tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].userId}</td>
                    <td>${data[i].flightId}</td>
                    <td>${data[i].bookingDate}</td>
                    <td>
                        <ul>
                            <li>
                                <strong>Passenger 1:</strong>
                                <ul>
                                    <li>First Name: ${data[i].passengerInfo.firstName}</li>
                                    <li>Last Name: ${data[i].passengerInfo.lastName}</li>
                                    <li>Email: ${data[i].passengerInfo.email}</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Passenger 2:</strong>
                                <ul>
                                    <li>First Name: Jane</li>
                                    <li>Last Name: Smith</li>
                                    <li>Email: jane@example.com</li>
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
   
    showError() {
        alert("Fetch user info error, we're notified")
    }

}