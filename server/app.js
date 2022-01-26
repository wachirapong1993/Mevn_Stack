//imports 
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.port; //5000
//middlewases
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extends:true}));
app.use(express.static("uploads"));

//database connection
mongoose.connect(process.env.DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}).then(()=>console.log('Connected to the database!')).catch((err)=>console.log(err));

//routes prefix
app.use("/api/post", require("./routes/routes"));
//start server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });