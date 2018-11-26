const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//connect to Mongo users database
mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true });

const Cat = mongoose.model('user', {
    username: String,
    password: String,
    firstName: String,
    sirName: String
});