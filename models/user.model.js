const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'please ass an email'],
            trim: true,
            lowercase: true,

        },
        password: {
            type: String,
            required: [true, 'please ass a password'],
            minlenght: 6,
        },
    },

    {
        timestamps: true, // Automatically adds createAt and UpdatedAt fields


    }


);

const User = mongoose.model('User',UserSchema)

module.exports = User;

