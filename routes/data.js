const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = express.Router();

//importSchemas
restaurantSchema = require('../models/restaurant');
reviewSchema = require('../models/review');

let Restaurant = mongoose.model('Restaurant', restaurantSchema);
let Review = mongoose.model('Review', reviewSchema);


router.get("*", function (req, res) {
    console.log("data requested: " + req.url);
    res.send(` you have requested ${req.url}`);
});

router.get("/all", function (req, res) {
    console.log("API requested: " + req.url);

    res.send(Restaurant.find(function (err, restaurants) {
        if (err) return console.error(err);
    }));
});

router.post('/newReview', function (req, res) {
    newReview = new Review(req.body.json)

    newReview.save(function (err, fluffy) {
        if (err) return console.error(err);
        console.log(`new review from ${newReview.name}`)
    });

});

module.exports = router;