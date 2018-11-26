//express imports
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

//import users model
const User = require('../models/user.js');

//variables
const router = express.Router();
const app = express();


//User Routes

router.get('/', (req, res) => {
    console.log('user route requested' + req.url)
    res.send('Invalid request');
});

router.post('/register', (req, res, next) => {
    console.log('user route requested' + req.url)

    //create user model
    let newUser = new newUser({
        firstName: req.body.firstName,
        sirName: req.body.sirName,
        username: req.body.username,
        password: req.body.password,
    });

    //handle request
    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'failed to register user \n' + err });
        } else {
            res.json({ success: true, msg: 'user has been registered' + user.name });
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

module.exports = { router };