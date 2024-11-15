const express=require('express')
app.use("/", require('./route'));
const mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost:27017/bookManagement', (err) => {
    if (err) console.log(err)
    else console.log("Database connected nbvhsbdjkfv")
});

app.listen(4000);