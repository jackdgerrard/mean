//express imports
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

//variables
const router = express.Router();
const app = express();

//import users model
const User = require('../models/user');

//register new user

router.post('/register', (req, res, next) => {

    //create user model from schema
    let newUser = new User({
        username: req.body.username,
        password: req.body.password
    });

    console.log(newUser)

    //handle http request
    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'failed to register user \n' + err });
        } else {
            res.json({ success: true, msg: 'user has been registered' + user.username });
        }
    })
});

router.get('/authenticate', (req, res, next) => {
    console.log('user route requested' + req.url)
    res.send('authenticate user');
});

router.get('/profile', (req, res, next) => {
    console.log('user route requested' + req.url)
    res.send('profile of user');
});

router.get('/validate', (req, res, next) => {
    console.log('user route requested' + req.url)
    res.send('user valid');
});

module.exports = router;