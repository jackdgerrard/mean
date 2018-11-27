//variables
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const app = express();

//import users model
const User = require('../models/user');

//register new user

router.post('/register', (req, res, next) => {

    //create user model from schema
    let userObject = new User({
        username: req.body.username,
        password: req.body.password
    });

    //console.log(newUser)

    //handle http request
    userObject.addUser(userObject, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'failed to register user ' + err });
        } else {
            res.json({ success: true, msg: 'user has been registered' + userObject.username });
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