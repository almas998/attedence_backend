const User = require("../models/userModel");
const {validationResult} = require("express-validator");
const {hashpassword, createToken} = require("../services/authServices");
// const upload = require("../utils/multer");


////image upload function///
// module.exports.imageUpload = (req, res) => {
//     upload(req, res, (err) => {
//         if(err) {
//           res.status(400).send("Something went wrong!");
//         }
//         res.send(req.file);
//       });
// }



//// register api/////
module.exports.register = async(req , res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const { name, email, password } = req.body
        const emailExist = await User.findOne({ email })
        try {
            if (!emailExist) {
                const hashed = await hashpassword(password)
                const user = await User.create({
                    name,
                    email,
                    password : hashed,
                    // image: req.file.filename
                });
                console.log(user)
                const token = createToken({id : user._id , name : user.name})
                return res.status(201).json({msg : "your account has been created" , token})
            } else {
                return res.status(401).json({errors : [{msg : `${email} is already taken`}]})
            };
        } catch (error) {
            console.log(error.message)
            return res.status(500).json()
        };
    } else {
       //validation failed
       return res.status(400).json({ errors: errors.array() })
    };
};


///login api ////

module.exports.login = async(req , res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const {email ,name, password} =req.body;
        try {
            const login = await User.findOne({name})
            if (!login) {
                return res.status(401).json({errors : [{msg  : `${name} is not found`}]})
            } else {
                return res.status(201).json({msg : "login sucessfylly"})
            }
        } catch (error) {
            console.log(error.message)
        }
    } else {
        return res.status(400).json({errors: errors.array()})
    }
}