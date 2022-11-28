const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;
const mongoConnect = require("./config/dbConfig");
const userRoute = require("./routes/userRoute");

//mongo connection//
mongoConnect();

app.use(cors());
app.use(express.json()); 

///user route///
app.use("/api" , userRoute );
app.use(express.static('public'));
// app.use(express.static(__dirname+"./uploads"))
// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });