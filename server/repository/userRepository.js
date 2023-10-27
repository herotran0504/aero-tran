const UserDao = require("../database/dao/userDao");

class UserRepository {

    constructor() {
        this.userDao = new UserDao();
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

    async updateUserInfo(userData) {
        return await this.userDao.updateUser(userData);
    }

}

module.exports = UserRepository
