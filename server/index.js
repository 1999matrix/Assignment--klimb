var mongoose = require('mongoose');
const express = require("express");
const cors = require('cors');
require('dotenv/config');

const app = express();
app.use(cors());
mongoose.connect(MONGO_URI)
   var userRoute = require('./routes/userRoute');
   app.use('/' , userRoute);
app.listen(3001 , function(){
    console.log('app is running');
})