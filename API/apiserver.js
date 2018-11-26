const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

let restaurantSchema = new mongoose.Schema({
    id: Number,
    name: String,
    neighbourhood: String,
    photograph: String,
    address: String,
    latlng: Object,
    cuisine_type: String,
    operating_hours: Object,
    reviews: Array,
});

let reviewSchema = new mongoose.Schema({
    name: String,
    date: String,
    rating: Number,
    comments: String
});

//connect to Mongo restaurants database
mongoose.connect('mongodb://localhost/restaurants', { useNewUrlParser: true });

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected to restaurants database')
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);
var Review = mongoose.model('Review', reviewSchema);

const port = 23450;

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

app.listen(port, function () {
    console.log(`API server listening at http://localhost:${port}!`)
})
