const {MongoClient} = require('mongodb');
const Const = require("./util/Const");

async function initializeDatabase() {
    const client = new MongoClient(Const.DB_URL, {useUnifiedTopology: true});

    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(Const.DB_NAME);

        // Read and print sample data from the 'users' collection
        const usersCollection = db.collection('users');
        const users = await usersCollection.find({}).toArray();
        console.log('Sample users data:');
        console.log(users);

        // Read and print sample data from the 'flights' collection
        const flightsCollection = db.collection('flights');
        const flights = await flightsCollection.find({}).toArray();
        console.log('Sample flights data:');
        console.log(flights);

        // Read and print sample data from the 'flights' collection
        const bookingsCollection = db.collection('bookings');
        const bookings = await bookingsCollection.find({}).toArray();
        console.log('Sample bookings data:');
        console.log(bookings);
    } catch (error) {
        console.error('Error initializing database:', error);
    } finally {
        await client.close();
    }
}

module.exports = initializeDatabase
