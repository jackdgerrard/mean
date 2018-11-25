const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restaurants');

const port = 23450;

//const user-requests = require('users.js');
//const restaurant-requests = require('restaurants.js');

app.get("*", function (req, res) {
    console.log("API requested: " + req.url);
    res.send(` you have requested ${req.url}`);
});

app.listen(port, function () {
    console.log(`API server listening at http://localhost:${port}!`)
})

