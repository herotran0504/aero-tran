const BaseDao = require('./BaseDao');
const {ObjectId} = require("mongodb");

class UserDao extends BaseDao {
    constructor() {
        super();
    }

    async createUser(user) {
        try {
            await this.connect();
            const users = this.db.collection('users');
            const result = await users.insertOne(user);
            return result.insertedId;
        } finally {
            await this.disconnect();
        }
    }

    async updateUser(user) {
        try {
            await this.connect();
            const users = this.db.collection('users');
            const result = await users.updateOne(
                {_id: new ObjectId(user.userId)},
                {
                    $set: {
                        "firstName": user.firstName,
                        "lastName": user.lastName,
                        "dob": user.dob,
                        "address": user.address,
                    }

                }, {multi: true}
            );
            return result.matchedCount;
        } finally {
            await this.disconnect();
        }
    }

    async getUserByEmail(email) {
        try {
            await this.connect();
            const users = this.db.collection('users');
            const user = await users.findOne({email});
            if (!user) {
                console.log(`User with email ${email} not found`);
            }
            return user;
        } catch (error) {
            console.error(`Error in getUserByEmail: ${error}`);
            throw error;
        } finally {
            await this.disconnect();
        }
    }

    async getUserByUserId(userId) {
        try {
            await this.connect();
            const users = this.db.collection('users');
            const user = await users.findOne({_id: new ObjectId(userId)});
            if (!user) {
                console.log(`User with userId ${userId} not found`);
            }
            return user;
        } catch (error) {
            console.error(`Error in getUserByUserId: ${error}`);
            throw error;
        } finally {
            await this.disconnect();
        }
    }

}

module.exports = UserDao;