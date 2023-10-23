const UserDao = require("../database/dao/userDao");

class UserRepository {

    constructor() {
        this.userDao = new UserDao();
    }

    async getAllUsers() {
        return this.userDao.getAllUsers();
    }

}

module.exports = UserRepository
