const BaseDao = require('./BaseDao');
const {ObjectId} = require("mongodb");

class UserDao extends BaseDao {
    constructor() {
        super();
    }

    async createUser(userData) {
        try {
            await this.connect();
            const usersCollection = this.db.collection('users');
            const result = await usersCollection.insertOne(userData);
            return result.insertedId;
        } finally {
            await this.disconnect();
        }
    }

    async getUserByEmail(email) {
        try {
            await this.connect();
            const usersCollection = this.db.collection('users');
            const user = await usersCollection.findOne({email});
            if (!user) {
                console.log(`User with email ${email} not found`);
            }
            return user;
        } catch (error) {
            console.error('Error in getUserByEmail:', error);
            throw error;
        } finally {
            await this.disconnect();
        }
    }

    async getUserByUserId(userId) {
        try {
            await this.connect();
            const usersCollection = this.db.collection('users');
            const user = await usersCollection.findOne({_id: new ObjectId(userId)});
            if (!user) {
                console.log(`User with userId ${userId} not found`);
            }
            return user;
        } catch (error) {
            console.error('Error in getUserByUserId:', error);
            throw error;
        } finally {
            await this.disconnect();
        }
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