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
          return await flightsCollection.find({id}).toArray();
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
}

module.exports = FlightDao;