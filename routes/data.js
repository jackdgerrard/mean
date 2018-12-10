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

router.get("/", (req, res) => {
  res.send("invalid data endpoint");
});

router.get("/all", (req, res) => {
  console.log(req.originalUrl + " request recieved");
  db.collection('restaurantsCollection').find().toArray(function (err, results) {
    //console.table(results);
    res.json(results);
  })
});

router.get("/filter/type:query", (req, res) => {
  console.log(req.originalUrl + " request recieved");
  db.collection('restaurantsCollection').find(
    { 'cuisine_type': req.params.query }
  ).toArray(function (err, results) {
    //console.table(results);
    res.json(results);
  })
});

router.get("/filter/neighborhood:query", (req, res) => {
  console.log(req.originalUrl + " request recieved");
  db.collection('restaurantsCollection').find(
    { 'neighborhood': req.params.query }
  ).toArray(function (err, results) {
    //console.table(results);
    res.json(results);
  })
});

router.get("/search:term", (req, res) => {
  console.log(req.originalUrl + " request recieved");
  console.table(req.params.term)
  db.collection('restaurantsCollection').find(
    { "name": { $regex: ".*" + req.params.term + ".*" } }
  ).toArray(function (err, results) {
    //console.table(results);
    res.json(results);
  })
});

router.post("/newData", (req, res) => {

  //extract data from request
  updatedRestaurant = req.body;
  query = { 'name': `req.body.name` };
  replacement = updatedRestaurant;
  options = { upsert: true };

  console.log(req.originalUrl + " request recieved");

  //log to the DB
  try {
    db.collection('restaurantsCollection').replaceOne(query, replacement, options);
  } catch (e) { console.error(e); }
});

module.exports = router;
