const UserRepository = require("../repository/userRepository");

class UserController {

    async getAllUsers(req, res, next) {
        res.status(200).json(await (new UserRepository()).getAllUsers());
    }

}

module.exports = UserController;