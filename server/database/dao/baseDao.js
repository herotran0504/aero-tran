const {MongoClient} = require('mongodb');
const URL = 'mongodb://localhost:27017';
const DB_NAME = 'aero-tran';

class BaseDao {
    constructor() {
        this.url = URL;
        this.dbName = DB_NAME;
    }

    async connect() {
        this.client = new MongoClient(this.url, {useUnifiedTopology: true});
        await this.client.connect();
        this.db = this.client.db(this.dbName);
    }

    async disconnect() {
        if (this.client) {
            await this.client.close();
        }
    }
}

module.exports = BaseDao;
