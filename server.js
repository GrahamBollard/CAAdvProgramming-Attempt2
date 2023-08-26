var express = require("express");
var app = express();
var mongoose = require("mongoose");
var morgan = require("morgan");
var bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");

//DB COnnect
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,  //https://mongoosejs.com/docs/5.x/docs/deprecations.html
}).then(() => console.log("Database has been connected"))
    .catch((err)=>console.log(Error));

//port
const port = process.env.PORT || 5000

app.listen(port, ()=>{
console.log("Server Running on Port 5000");
});