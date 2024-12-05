const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;
const NODE_ENV = process.env.NODE_ENV || 'development';

 const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '15d' });

    res.cookie('jwt-netflix', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, 
        httpOnly: true, 
        sameSite: 'strict',
        secure: NODE_ENV !== 'development', 
    });

    return token;
};

module.exports=generateTokenAndSetCookie;
