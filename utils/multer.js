// const multer = require("multer");

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, './uploads')
//         },
//         filename: function (req, file, cb) {
//             cb(null, file.filename + "-" + Date.now() + ".jpg")
//         }
//     })
// }).single('file');

// module.exports = upload;

const multer = require('multer');
var storage = multer.diskStorage({   
    destination: function(req, file, cb) { 
       cb(null, './uploads');    
    },
    filename: function (req, file, cb) { 
       cb(null , file.originalname);   
    }
 });
 var upload = multer({ storage: storage, limits : {fileSize : 1000000} }).single("image");


module.exports = upload;