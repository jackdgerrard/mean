/* 

    imports - see readme.md

*/
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");

/* 

    Express

*/

const app = express();
const router = express.Router();

//middleware applications
app.use(cors());
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

//routes imports
app.use("/users", require("./routes/users"));
app.use("/data", require("./routes/data"));

// set static directory for angular folder to be served without
// rendering from a template engine
app.use(express.static(path.join(__dirname, "/view")));

//serve angular app from view folder
router.get("/", (req, res) => {
  console.log("SPA requested");
  res.sendFile(path.join(__dirname, "view/index.html"));
});

//start server on port 3000.
app.listen((port = 3000), () => {
  console.log(`listening for requests at http://localhost:${port} ...`);
});

/* 

    Mongo

*/

//connect to Mongo  database
mongoose.connect(
  require("./config/database").database,
  { useNewUrlParser: true }
);

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected to Mongo database on default port");
});
