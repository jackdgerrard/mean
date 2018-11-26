var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let reviewSchema = new mongoose.Schema({
    name: String,
    date: String,
    rating: Number,
    comments: String
});