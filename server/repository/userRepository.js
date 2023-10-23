const UserDao = require("../database/dao/userDao");

class UserRepository {

    constructor() {
        this.userDao = new UserDao();
    }

    async getAllUsers() {
        return await this.userDao.getAllUsers();
    }

    async registerUser(userData) {
        return await this.userDao.createUser(userData);
    }

    async findUserByUserId(userId) {
        return await this.userDao.getUserByUserId(userId);
    }

    async findUserByEmail(email) {
        return await this.userDao.getUserByEmail(email);
    }
}

module.exports = UserRepository
