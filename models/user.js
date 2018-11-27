const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const UserSchema = mongoose.Schema({
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

UserSchema.methods.addUser = (userObject, callback) => {
    //salt and hash password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(userObject.password, salt, (err, hash) => {
            if (err) throw err;
            //set users password
            userObject.password = hash;
            userObject.save(callback);
        })
    });
}

module.exports = mongoose.model('User', UserSchema);