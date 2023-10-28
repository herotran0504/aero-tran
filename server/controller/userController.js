const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const UserRepository = require('../repository/UserRepository');
const Const = require("../util/Const");
const repository = new UserRepository();

class UserController {

    async register(req, res) {
        const {username, email, password, firstName, lastName, dob, address} = req.body;
        const hashedPassword = await bcrypt.hash(password, Const.CRYPT_SALT);

        const userData = {username, email, password: hashedPassword, firstName, lastName, dob, address};
        const user = await repository.registerUser(userData);

        res.status(201).json({message: 'User registered successfully', user});
    }

    async login(req, res) {
        const {email, password} = req.body;
        const user = await repository.findUserByEmail(email);
        if (!user) {
            return res.status(401).json({message: 'Login failed'});
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            const token = jwt.sign({userId: user.id}, Const.SECRET_KEY, {expiresIn: `${Const.EXPIRE_TIME_HOURS}h`});
            return res.status(200).json({message: 'Login successful', token});
        }

        return res.status(401).json({message: 'Login failed'});
    }

    async getUserInfo(req, res) {
        try {
            let userId = req.userId;
            const {username, email, firstName, lastName, dob, address} = await repository.findUserByUserId(userId);
            const user = {userId, username, email, firstName, lastName, dob, address}
            return res.status(200).json({message: 'Fetch user successful', user});
        } catch (error) {
            return res.status(401).json({message: 'Fetch user failed ' + error.message});
        }
    }

    async updateUserInfo(req, res) {
        try {
            const userId = req.userId
            const {firstName, lastName, dob, address} = req.body;
            const userData = {userId, firstName, lastName, dob, address};
            await console.log(`userData::${userData}`);
            const user = await repository.updateUserInfo(userData);
            return res.status(200).json({message: 'Update user successful', user});
        } catch (error) {
            return res.status(401).json({message: 'Update user failed' + error.message});
        }
    }

}

module.exports = UserController;