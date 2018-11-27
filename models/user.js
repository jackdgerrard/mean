const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports.getUserById = function (id, callback) {
    user.findById(id, callback);
}

module.exports.getUserByUserName = function (username, callback) {
    user.findOne({ username: username }, callback);
}

module.exports.addUser = function (newUser, callback) {
    //salt and hash password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            //set users password
            newUser.password = hash;
            newUser.save(callback);
        })
    });
}

const user = module.exports = mongoose.model('User', userSchema);