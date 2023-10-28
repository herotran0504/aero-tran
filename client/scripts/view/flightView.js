export class FlightView {

    showFlightSearchSuccess(result, onBookCallback) {
        const doc = document;
        const tBody = doc.getElementById('tbodyFlightsList');
        const theadFlightsList = doc.getElementById('theadFlightsList');
        theadFlightsList.style.display = 'table-header-group';
        for (const flight of result) {
            //create a row
            let tr = doc.createElement('tr');

            //create columns
            let flightNumber = this.createFlightColumn(flight);
            let from = this.createFromColumn(flight);
            let to = this.createFromColumn(flight, false);
            let ecoPrice = this.createPriceColums(flight, onBookCallback);
            let businessPrice = this.createPriceColums(flight, onBookCallback, false);

            let tdDetails = this.createDetailsColumn(flight);

            tr.appendChild(flightNumber);
            tr.appendChild(from);
            tr.appendChild(to);
            tr.appendChild(ecoPrice);
            tr.appendChild(businessPrice);
            tr.appendChild(tdDetails);

            tBody.appendChild(tr);
        }
    }

    loadAllFlights(result) {
        const doc = document;
        const flightFrom = doc.getElementById('flightFrom');
        const flightTo = doc.getElementById('flightTo');
        const seenFrom = new Set();
        const seenTo = new Set();
        for (const flight of result) {
            let optionFrom = doc.createElement('option');
            optionFrom.text = flight.departureCity;
            optionFrom.value = flight.departureCity;
            if (!seenFrom.has(optionFrom.value)) {
                seenFrom.add(optionFrom.value);
                flightFrom.appendChild(optionFrom);
            }

            let optionTo = doc.createElement('option');
            optionTo.text = flight.arrivalCity;
            optionTo.value = flight.arrivalCity;
            if (!seenTo.has(optionTo.value)) {
                seenTo.add(optionTo.value);
                flightTo.appendChild(optionTo);
            }
        }
    }

    createFromColumn(data, isDepart = true) {
        const doc = document;
        //create from column
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

    createPriceColums(data, onBookCallback, isEco = true,) {
        const doc = document;
        let td = doc.createElement('td');

        let h4 = doc.createElement('h4');
        h4.textContent = isEco ? "Economy" : "Business";

        let h2 = doc.createElement('h2');
        h2.textContent = "$" + (isEco ? data.ecoPrice : data.businessPrice);
        h2.style.fontWeight = 'bold';

        let h5 = doc.createElement('h5');
        h5.textContent = "Available seats: "
        h5.textContent += isEco ? data.availableEcoSeats : data.availlableBSeats;

        let bookBtn = this.createBookButton(data, isEco, onBookCallback);

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
        link.classList.add("detailLink");
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

    createBookButton(data, isEco = true, onBookCallback) {
        const doc = document;
        let td = doc.createElement('td');
        let btn = doc.createElement('button');
        btn.textContent = "Book";
        let url = `/client/pages/bookingnew.html?flightId=${data.id}&isEco=${isEco}`;
        btn.addEventListener('click', () => {
            onBookCallback(url)
        });
        td.appendChild(btn);
        return td;
    }

    createDetailsInfo(data) {
        const doc = document;
        let info = doc.createElement('tr');

        let flightTd = doc.createElement('td');
        let fromTd = doc.createElement('td');
        let durationTd = doc.createElement('td');
        let toTd = doc.createElement('td');

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

        let arrivalDate = doc.createElement('div');
        arrivalDate.textContent = "To: " + data.arivalDate;

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

        let availableSeats = doc.createElement('div');
        availableSeats.textContent = "Total business seats Available: " + data.availlableBSeats;

        flightTd.appendChild(flightNo);

        fromTd.appendChild(departureCity);
        fromTd.appendChild(departureDate);
        fromTd.appendChild(departureTime);

        durationTd.appendChild(duration);
        durationTd.appendChild(aircraftType);
        durationTd.appendChild(ecoPrice);
        durationTd.appendChild(availableEcoSeats);
        durationTd.appendChild(businessPrice);
        durationTd.appendChild(availableSeats);

        toTd.appendChild(arrivalCity);
        toTd.appendChild(arrivalDate);
        toTd.appendChild(arrivalTime);

        info.appendChild(flightTd);
        info.appendChild(fromTd);
        info.appendChild(durationTd);
        info.appendChild(toTd);
        return info;
    }

    showFlightSearchFail() {
        alert('flight not found');
    }

}