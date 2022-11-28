const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv =require("dotenv");

dotenv.config()
//secret key//
const secret_key = process.env.SECRET_KEY;


module.exports.hashpassword = async(password) => {
    const hashed = await bcrypt.hash(password, 10)
    return hashed;
}

module.exports.createToken = (user) => {
    return jwt.sign(user , secret_key ,{
        expiresIn : "7d"
    })
}