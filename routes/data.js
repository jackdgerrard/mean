const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const MongoClient = require('mongodb').MongoClient
const router = express.Router();

const dbconfig = require('../config/database');
//reviews
reviewSchema = require("../models/review");

let db;

MongoClient.connect(dbconfig.database, (err, client) => {
  if (err) return console.log(err)
  db = client.db('restaurants')
})
//get all restaurants

function getAllData() {

}

//Express routes

router.get("/", function (req, res) {
  res.send("invalid data endpoint");
});

router.get("/all", function (req, res) {
  console.log(req.url + " request recieved");
  var cursor = db.collection('restaurantsCollection').find().toArray(function (err, results) {
    console.table(results);
    res.json(results);
  })

});

router.post("/newReview", function (req, res) {
  newReview = new Review(req.body.json);

  let name = Review.name;
  let text = Review.comments;
  let date = Review.date;
  let rating = Review.rating;

  newReview.save(function (err, newReview) {
    if (err) return console.error(err);
    console.log(`new review from ${newReview.name}`);
  });
});

module.exports = router;
