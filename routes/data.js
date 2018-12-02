const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = express.Router();

//reviews
reviewSchema = require("../models/review");

//restaurants

let RestaurantSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: String,
    neighbourhood: String,
    photograph: String,
    address: String,
    latlng: Object,
    cuisine_type: String,
    operating_hours: Object,
    reviews: Array
  },
  { collection: "restaurantsCollection" }
);
//restaurant model

restaurantModel = mongoose.model("restaurantModel", RestaurantSchema);

//get all restaurants

function getAllRestauarants() {
  console.log("mongoose fetching all restaurants ");
  console.log(">>>> ");

  data = restaurantModel.find({}, (err, allrestaurants) => {
    if (err) return console.error(err);
    console.log(allrestaurants);
  });

  return data;
}

//Express routes

router.get("/", function(req, res) {
  res.send("invalid data endpoint");
});

router.get("/all", function(req, res) {
  console.log("data requested: " + req.url);

  let data = getAllRestauarants();
  //console.log(data);

  res.send(data);
});

router.post("/newReview", function(req, res) {
  newReview = new Review(req.body.json);

  let name = Review.name;
  let text = Review.comments;
  let date = Review.date;
  let rating = Review.rating;

  newReview.save(function(err, newReview) {
    if (err) return console.error(err);
    console.log(`new review from ${newReview.name}`);
  });
});

module.exports = router;
