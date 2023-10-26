const jwt = require('jsonwebtoken');
const Const = require("../util/Const");
const NON_RES_PATHS = ["/login", "/register"];

async function verifyJwtToken(req, res, next) {
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

async function verifyToken(req, res, next) {
    if (NON_RES_PATHS.includes(req.path)) {
        next();
    } else {
        await verifyJwtToken(req, res, next);
    }
}

module.exports = verifyToken;