const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, 'Please add a name'],
            trim: true,
        },
        







    }
)


