const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    registrationnumber: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    teamname: {
        type: String,
        required: true,
        unique: true
    }
})

const User = mongoose.model('user', UserSchema);
module.exports = User;