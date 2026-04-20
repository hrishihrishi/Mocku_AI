const dotenv = require("dotenv");
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = process.env

const verifyJWT = (req, res, next) => {
    const { token } = req.headers["Authorization"].split(" ")[1];
    if (!token){ res.status(400).json({ message: "no token found"}) }
    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        next();
    } catch (error) {
        res.status(400).json({ message: "jwt verification failed"})
    }
}

module.exports = { verifyJWT };