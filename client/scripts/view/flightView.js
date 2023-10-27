import { Navigator } from "../navigator/navigator.js"
export class FlightView {

    showFlightSearchSuccess(result) {
        const doc = document;
        const tBoody = doc.getElementById('tbodyFlightsList');
        for (const flight of result) {
            //create a row
            let tr = doc.createElement('tr');

            //create collumns
            let flightNumber = this.createFlightColumn(flight);
            let from = this.createFromColumn(flight);
            let to = this.createFromColumn(flight, false);
            let ecoPrice = this.createPriceColums(flight);
            let businessPrice = this.createPriceColums(flight, false);


            let tdDetails = this.createDetailsColumn(flight);

            tr.appendChild(flightNumber);
            tr.appendChild(from);
            tr.appendChild(to);
            tr.appendChild(ecoPrice);
            tr.appendChild(businessPrice);
            tr.appendChild(tdDetails);

            tBoody.appendChild(tr);
        }
    }
    createFromColumn(data, isDepart = true) {
        const doc = document;
        //create from collumn
        let td = doc.createElement('td');

        //time
        let h3 = doc.createElement('h3');
        h3.textContent = isDepart ? data.departureTime : data.arrivalTime;
        h3.style.fontWeight = 'bold';
        td.appendChild(h3);
        // departure city
        let h4 = doc.createElement('h4');
        h4.textContent = isDepart ? data.departureCity : data.arrivalCity;
        td.appendChild(h4);
        return td;
    }
    createFlightColumn(data) {
        const doc = document;
        let td = doc.createElement('td');
        let h2 = doc.createElement('h2');
        h2.textContent = data.flightNumber;
        h2.style.fontWeight = 'bold';
        td.appendChild(h2);
        return td;
    }
    createPriceColums(data, isEco = true) {
        const doc = document;
        let td = doc.createElement('td');

        let h4 = doc.createElement('h4');
        h4.textContent = isEco ? "Economy" : "Business";

        let h2 = doc.createElement('h2');
        let curencySymbol = "$";
        h2.textContent = "$" + (isEco ? data.ecoPrice : data.businessPrice);
        h2.style.fontWeight = 'bold';

        let h5 = doc.createElement('h5');
        h5.textContent = "Available seats: "
        h5.textContent += isEco ? data.availableEcoSeats : data.availlableBSeats;

        let bookBtn = this.createBookButton(data, isEco);

        let td1 = doc.createElement('td');
        td1.appendChild(h4);
        td1.appendChild(h2);
        td1.appendChild(h5);

        let td2 = doc.createElement('td');
        td2.appendChild(bookBtn);

        td.appendChild(td1);
        td.appendChild(td2);

        return td;
    }
    createDetailsColumn(data) {
        const doc = document;
        let td = doc.createElement('td');

        let link = doc.createElement('a');
        link.textContent = "Details...";
        link.href = "";
        link.addEventListener('click', (evt) => {
            evt.preventDefault();
            let tbBodyDetails = doc.getElementById('tbodyFlightsDetails');
            while (tbBodyDetails.firstChild) {
                tbBodyDetails.removeChild(tbBodyDetails.firstChild);
              }
            let info = this.createDetailsInfo(data);
            tbBodyDetails.appendChild(info);
        })

        td.appendChild(link);
        return td;
    }
    createBookButton(data, isEco = true) {
        const doc = document;
        let td = doc.createElement('td');
        let btn = doc.createElement('button');
        btn.textContent = "Book";
        let url = `/client/pages/bookingnew.html?flightId=${data.id}&isEco=${isEco}`;
        btn.addEventListener('click', (evt) => {
            Navigator.navigateTo(url)
        });
        td.appendChild(btn);
        return td;
    }

    createDetailsInfo(data) {
        const doc = document;
        let info = doc.createElement('tr');

        let flightTd = doc.createElement('td');
        let fromtd = doc.createElement('td');
        let durationtd = doc.createElement('td');
        let totd = doc.createElement('td');

        let flightNo = doc.createElement('h4');
        flightNo.textContent = "Flight Number: " + data.flightNumber;

        let departureCity = doc.createElement('div');
        departureCity.textContent = "From: " + data.departureCity;

        let departureDate = doc.createElement('div');
        departureDate.textContent = "Departure Date: " + data.departureDate;

        let departureTime = doc.createElement('div');
        departureTime.textContent = "Departure Time: " + data.departureTime;

        let arrivalCity = doc.createElement('div');
        arrivalCity.textContent = "To: " + data.arrivalCity;

        let arivalDate = doc.createElement('div');
        arivalDate.textContent = "To: " + data.arivalDate;

        let arrivalTime = doc.createElement('div');
        arrivalTime.textContent = "Arrival Time: " + data.arrivalTime;

        let duration = doc.createElement('div');
        duration.textContent = "Duration: " + data.duration;

        let aircraftType = doc.createElement('div');
        aircraftType.textContent = "Aircraft Type: " + data.aircraftType;

        let ecoPrice = doc.createElement('div');
        ecoPrice.textContent = "Economy price: " + data.ecoPrice;

        let availableEcoSeats = doc.createElement('div');
        availableEcoSeats.textContent = "Total economy seats Available: " + data.availableEcoSeats;

        let businessPrice = doc.createElement('div');
        businessPrice.textContent = "Business price: " + data.businessPrice;

        let availlableBSeats = doc.createElement('div');
        availlableBSeats.textContent = "Total business seats Available: " + data.availlableBSeats;
        

        flightTd.appendChild(flightNo);
        
        fromtd.appendChild(departureCity);
        fromtd.appendChild(departureDate);
        fromtd.appendChild(departureTime);

        durationtd.appendChild(duration);
        durationtd.appendChild(aircraftType);
        durationtd.appendChild(ecoPrice);
        durationtd.appendChild(availableEcoSeats);
        durationtd.appendChild(businessPrice);
        durationtd.appendChild(availlableBSeats);

        totd.appendChild(arrivalCity);
        totd.appendChild(arivalDate);
        totd.appendChild(arrivalTime);
        
        
        info.appendChild(flightTd);
        info.appendChild(fromtd);
        info.appendChild(durationtd);
        info.appendChild(totd);
        // console.log(info);
        return info;
    }

    showFlightSearchFail() {
        alert('flight not found');
    }

}