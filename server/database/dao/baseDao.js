const {MongoClient} = require('mongodb');
const Const = require("../../util/Const");

class BaseDao {
    constructor() {
        this.dbUrl = Const.DB_URL;
        this.dbName = Const.DB_NAME;
    }

    async connect() {
        this.client = new MongoClient(this.dbUrl, {useUnifiedTopology: true});
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
