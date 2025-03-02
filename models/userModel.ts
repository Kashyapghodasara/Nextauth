// Date - 26-11-2024  -  Tuesday

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username : {
        type: "String",
        required: "true"
    },
    email : {
        type: "String",
        required: "true"
    },
    password : {
        type: "String",
        required: "true",
        minlength: "4"
    }
}, {timestamps: true})

// Safely create the model if it doesn't already exist
const User = mongoose.models.user || mongoose.model('user', userSchema);

export default User;