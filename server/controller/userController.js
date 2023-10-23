const UserRepository = require("../repository/userRepository");

class UserController {

    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    login() {
        console.log("login()");
    }

    static create() {
        let userRepository = UserRepository.create();
        return new UserController(userRepository);
    }

}

module.exports = UserController;