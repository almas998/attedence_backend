const express = require("express");
const router = express.Router();
const {register, login, imageUpload} = require("../controllers/userController");
// const upload = require("../utils/multer");
const {registerValidations , loginValidations} = require("../validations/userValidation");

router.post("/register" , registerValidations,  register);
router.post("/login" , loginValidations , login);
// router.post("/image" , imageUpload);
// router.post("/image", (req, res) => {
//   upload(req, res, (err) => {
//    if(err) {
//      res.status(400).send("Something went wrong!");
//    }
//    res.send(req.file);
//  });
// });
module.exports = router;