const mongoose = require("mongoose");

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: async function (email) {
                const user = await this.constructor.findOne({ email });
                if (user) {
                    if (this.id === user.id) {
                        return true;
                    }
                    return false;
                }
                return true;
            },
            message: "Ez az e-mail cim mar hasznalatban van!",
        },
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
    isAdmin: {
        type: Boolean,
        default: false,
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

module.exports = mongoose.model("user", User);
