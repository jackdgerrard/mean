//express imports
const express = require('express');

//middleware imports
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');

//routes imports
const users = require('./routes/users');
const data = require('./routes/data');
const view = require('./routes/view');

//variables
const app = express();
const port = 80;
const config = require('./config/database');
const router = express.Router();

//middleware
app.use(cors);
app.use(bodyParser.json);

//connect to Mongo  database
mongoose.connect(config.database, { useNewUrlParser: true });

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected to Mongo database')
});



app.listen(port, function () {
    console.log(`listening for requests at http://localhost:${port} ...`)
})

