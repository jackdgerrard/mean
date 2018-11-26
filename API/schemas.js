var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let Restaurant = new Schema({
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

let Review = new Schema({
    name: String,
    date: String,
    rating: Number,
    comments: String
});


module.exports = {
    Restaurant, Review
}