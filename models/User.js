const mongoose = require("mongoose");

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    licenseCategory: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        required: false,
    },
    deletedAt: {
        type: Date,
        required: false,
    },
});

module.exports = mongoose.model("UserModel", User);
