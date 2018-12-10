const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const MongoClient = require('mongodb').MongoClient
const router = express.Router();

const dbconfig = require('../config/database');

//make db global
let db;

MongoClient.connect(dbconfig.database, { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err)
  db = client.db('restaurants')
})

//Express routes access mongo directly without Mongoose

router.get("/", function (req, res) {
  res.send("invalid data endpoint");
});

router.get("/all", function (req, res) {
  console.log(req.url + " request recieved");
  db.collection('restaurantsCollection').find().toArray(function (err, results) {
    //console.table(results);
    res.json(results);
  })
});

router.get("/filter", function (req, res) {
  console.log(req.url + " request recieved");
  console.table(req.body)
  db.collection('restaurantsCollection').find(
    {
      $and: [
        { 'cuisine_type': req.body.type },
        { 'neighborhood': req.body.neighborhood }
      ]
    }).toArray(function (err, results) {
      //console.table(results);
      res.json(results);
    })
});

router.post("/newData", function (req, res) {

  //extract data from request
  updatedRestaurant = req.body;
  query = { 'name': `req.body.name` };
  replacement = updatedRestaurant;
  options = { upsert: true };

  console.log(req.url + " request recieved");

  //log to the DB
  try {
    db.collection('restaurantsCollection').replaceOne(query, replacement, options);
  } catch (e) { console.error(e); }
});

module.exports = router;
