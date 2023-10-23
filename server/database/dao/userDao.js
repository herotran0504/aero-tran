const BaseDao = require('./BaseDao');

class UserDao extends BaseDao {
    constructor() {
        super();
    }

    async getAllUsers() {
        try {
            await this.connect();
            const usersCollection = this.db.collection('users');
            return await usersCollection.find({}).toArray();
        } finally {
            await this.disconnect();
        }
    }
}

module.exports = UserDao;