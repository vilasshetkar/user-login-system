const SECRETKEY = 'eCoMMERcEKey20#';

const jwt = require('jsonwebtoken');

const createToken = (user) => {
    return jwt.sign(user, SECRETKEY, { expiresIn: '1h' });
}

const verifyToken = (token) => {
    return jwt.verify(token, SECRETKEY);
}

const verifyUser = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const isValidUser = verifyToken(token);
        req.user = isValidUser;
        next();
    } catch(err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

module.exports = { createToken, verifyToken, verifyUser };