/* 

    imports - see readme.md

*/
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');



/* 

    Express

*/

const app = express();
const router = express.Router();
app.use(express.static(path.join(__dirname, '/view')));

//routes imports
app.use('/users', require('./routes/users'));
app.use('/data', require('./routes/data'));

//middleware imports
app.use(cors = require('cors'));
app.use((bodyParser = require('body-parser')).json);

router.get("/", (req, res) => {
    console.log("SPA requested");
    res.sendFile(path.join(__dirname, 'view/index.html'));
});

app.listen(port = 3000, () => {
    console.log(`listening for requests at http://localhost:${port} ...`)
})

/* 

    Mongo

*/

//connect to Mongo  database
mongoose.connect((require('./config/database')).database, { useNewUrlParser: true });

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected to Mongo database on default port')
});