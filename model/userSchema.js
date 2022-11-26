const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        require: true,
        type: String
    },
    user_number: {
        type: Number,
        require: true
    }
})