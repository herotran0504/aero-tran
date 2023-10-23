const UserDao = require("../database/dao/userDao");

class UserRepository {

    constructor(userDao) {
        this.userDao = userDao;
    }

    static create() {
        return new UserRepository(UserDao.create());
    }
}

module.exports = UserRepository;