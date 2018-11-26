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
    },
    firstName: {
        type: String,
        required: true
    },
    sirName: {
        type: String,
        required: true
    }
});

module.exports.getUserById = function (id, callback) {
    user.findById(id, callback);
}

module.exports.getUserByUserName = function (username, callback) {
    const query = { username: username }
    user.findOne(query, callback);
}

const user = module.exports = mongoose.model('User', userSchema);
module.exports.addUser = (newUser, callback) => {
    //hash password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        })
    });
}