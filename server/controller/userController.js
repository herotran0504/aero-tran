const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const UserRepository = require('../repository/UserRepository');
const Const = require("../util/Const");
const userRepository = new UserRepository();

class UserController {

    async getAllUsers(req, res) {
        let allUsers = await userRepository.getAllUsers();
        res.status(200).json(allUsers);
    }

    async register(req, res) {
        const {username, email, password, firstName, lastName, dob, address} = req.body;
        const hashedPassword = await bcrypt.hash(password, Const.CRYPT_SALT);

        const userData = {username, email, password: hashedPassword, firstName, lastName, dob, address};
        const user = await userRepository.registerUser(userData);

        res.status(201).json({message: 'User registered successfully', user});
    }

    async login(req, res) {
        const {email, password} = req.body;
        const user = await userRepository.findUserByEmail(email);
        if (!user) {
            return res.status(401).json({message: 'Login failed'});
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            const token = jwt.sign({userId: user._id}, Const.SECRET_KEY, {expiresIn: `${Const.EXPIRE_TIME}h`});
            return res.status(200).json({message: 'Login successful', token});
        }

        return res.status(401).json({message: 'Login failed'});
    }

    async getUserInfo(req, res) {
        try {
            const user = await userRepository.findUserByUserId(req.userId);
            return res.status(200).json({message: 'Fetch user successful', user});
        } catch (error) {
            return res.status(401).json({message: 'Fetch user failed' + error.message});
        }
    }

}

module.exports = UserController;