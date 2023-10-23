const { ObjectId } = require('mongodb');

class FlightDao {

  constructor(db) {
    this.flights = db.collection('flights');
  }

  async createFlight(flight) {
    const result = await this.flights.insertOne(flight);
    return result.insertedId;
  }

  async findFlightById(flightId) {
    return this.flights.findOne({ _id: new ObjectId(flightId) });
  }

  async searchFlights(criteria) {
    return this.flights.find(criteria).toArray();
  }
}

module.exports = FlightDao;