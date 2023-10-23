const Connector = require("../connector");
const {ObjectId} = require('mongodb');

class UserDao {

    constructor(db) {
        this.users = db.collection('users');
    }

    async createUser(user) {
        const result = await this.users.insertOne(user);
        return result.insertedId;
    }

    async findUserById(userId) {
        return this.users.findOne({_id: new ObjectId(userId)});
    }

    async findUserByUsername(username) {
        return this.users.findOne({username});
    }

    static create() {
        let connector = new Connector();
        const client = connector.connect();
        return new UserDao(client);
    }
}

module.exports = UserDao;