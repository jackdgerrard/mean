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

module.exports = Restaurant;