//variables
const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const app = express();
const bcrypt = require("bcryptjs");
const config = require("../config/database");

//import users model
const user = require("../models/user");

//register new user

router.post("/register", (req, res, next) => {
  //create user model from schema
  let newUser = new user({
    username: req.body.username,
    password: req.body.password
  });

  console.log(newUser);

  //handle http request
  addUser(newUser, (err, user) => {
    if (err) {
      res.json({ success: false, msg: "failed to register user " + err });
    } else {
      res.json({
        success: true,
        msg: "user has been registered " + newUser.username
      });
    }
  });
});

// Authenticate
router.post("/authenticate", (req, res, next) => {
  //store variables locally
  let username = req.body.username;
  let password = req.body.password;

  getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: "User not found" });
    }

    comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign({ data: user }, config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: `Bearer ${token}`,
          user: {
            id: user._id,
            username: user.username
          }
        });
      } else {
        return res.json({ success: false, msg: "Incorrect password" });
      }
    });
  });
});

//profile(protected by passport)
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.json({ user: req.user });
  }
);

//functions
getUserById = (id, callback) => {
  user.findById(id, callback);
};

getUserByUsername = (username, callback) => {
  user.findOne({ username: username }, callback);
};

comparePassword = (candidatepassword, hash, callback) => {
  bcrypt.compare(candidatepassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
};

addUser = function(newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports = router;
