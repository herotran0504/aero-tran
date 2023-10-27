const BaseDao = require('./BaseDao');

class FlightDao extends BaseDao {
    constructor() {
        super();
    }

    async getAllFlights() {
        try {
            await this.connect();
            const flightsCollection = this.db.collection('flights');
            return await flightsCollection.find({}).toArray();
        } finally {
            await this.disconnect();
        }
    }

    async getFlightById(id) {
        try {
            await this.connect();
            const flightsCollection = this.db.collection('flights');
            return await flightsCollection.find({ id }).toArray();
        } finally {
            await this.disconnect();
        }
    }

    async findFlights(query) {
        try {
            await this.connect();
            const flightsCollection = this.db.collection('flights');
            let result = await flightsCollection.find(query).toArray();
            //  console.log(`findFlights result: `, result);
            return result;
        } finally {
            await this.disconnect();
        }
    }

    async updateAvailableSeatsById(id, body) {
        try {
            await this.connect();
            const flightsCollection = this.db.collection('flights');
            let flight = await flightsCollection.find({ id }).toArray();

            let ecoBooked = parseInt(body.numOfEcoBooked);
            let businessBooked = parseInt(body.numOfBusinessBooked);

            let avaiEco = parseInt(flight[0].availableEcoSeats);
            let avaiBusiness = parseInt(flight[0].availlableBSeats);

            if (!ecoBooked || !avaiEco || !businessBooked || !avaiBusiness ||
                ecoBooked > avaiEco || businessBooked > avaiBusiness) {
                console.log("updateAvailableSeatsById undefined");
                return undefined;
            }
            let fieldToUpdate = {
                availableEcoSeats: (avaiEco - ecoBooked),
                availlableBSeats: (avaiBusiness - businessBooked)
            };
            console.log(fieldToUpdate);
            return await flightsCollection.updateMany({ id: id }, { $set: fieldToUpdate });
        } finally {
            await this.disconnect();
        }
    }
}

module.exports = FlightDao;