const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//importSchemas
restaurantSchema = require('../models/restaurant');
reviewSchema = require('../models/review');

let Restaurant = mongoose.model('Restaurant', restaurantSchema);
let Review = mongoose.model('Review', reviewSchema);


app.get("*", function (req, res) {
    console.log("API requested: " + req.url);
    res.send(` you have requested ${req.url}`);
});

app.get("/all", function (req, res) {
    console.log("API requested: " + req.url);

    res.send(Restaurant.find(function (err, restaurants) {
        if (err) return console.error(err);
    }));
});

app.post('/newReview', function (req, res) {
    newReview = new Review(req.body.json)

    newReview.save(function (err, fluffy) {
        if (err) return console.error(err);
        console.log(`new review from ${newReview.name}`)
    });

});

