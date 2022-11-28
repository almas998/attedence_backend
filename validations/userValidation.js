const {body} = require("express-validator")

module.exports. registerValidations = [
    body("name").not().isEmpty().trim().escape().withMessage("name is required"),
    body("email").isEmail().trim().normalizeEmail().withMessage("email is required"),
    // body("image").not().isEmpty().withMessage("image is required"),
    body("password").isLength({ min: 6 }).withMessage("password should be 6 characters long")
];

module.exports.loginValidations = [
    body("name").not().isEmpty().trim().escape().withMessage("name is required"),
    // body("email").isEmail().trim().normalizeEmail().withMessage("email is required"),
    // body("password").isLength({ min: 6 }).withMessage("password should be 6 characters long")
];