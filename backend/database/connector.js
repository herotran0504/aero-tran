const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017/aero-tran';

class Connector {

    async connect() {
        try {
            const client = new MongoClient(url, {useUnifiedTopology: true});
            await client.connect();
            return client;
        } catch (error) {
            console.error('Error connecting to db:', error);
            throw error;
        }
    }

}

module.exports = Connector;