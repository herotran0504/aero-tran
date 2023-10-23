const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    name: String,
    dob: String,
    address: String
});

module.exports = mongoose.model('User', userSchema);