const jwt = require('jsonwebtoken');
const Const = require("../util/Const");

async function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send('Token not provided');
    }

    jwt.verify(token, Const.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send('Invalid token');
        }
        req.userId = decoded.userId;
        next();
    });
}

module.exports = verifyToken;